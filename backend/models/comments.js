const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const commentsSchema = mongoose.Schema({
  blog_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
})


commentsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
commentsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Comments', commentsSchema)