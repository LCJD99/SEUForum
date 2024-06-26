const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const admin = require('./admin');

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const noticeSchema = mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  url: {
    type: String,
    minlength: 3,
    required: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  },
})


noticeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
noticeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Notice', noticeSchema)