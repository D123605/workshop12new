const mongoose = require('mongoose')
const mongoPath  = require('mongodb+srv://rohan:1234@cluster0.bdp16.mongodb.net/sorting?retryWrites=true&w=majority')

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  return mongoose
}