const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const feedbackSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: Number,
  },
})


feedbackSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
feedbackSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Feedback', feedbackSchema)