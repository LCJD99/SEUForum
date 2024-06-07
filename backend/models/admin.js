const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const adminSchema = new mongoose.Schema({
  adminname: {
    type: String,
    required: true,
    minlength: 3,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  notice: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ],
})

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

adminSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Admin', adminSchema)