const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const likesSchema = mongoose.Schema({
  blog_id: {
    type: String,
    required: true,
    unique: true
  },
  total: {
    type: Number,
  },
})

likesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
likesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Likes', likesSchema)