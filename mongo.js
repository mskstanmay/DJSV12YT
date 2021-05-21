const {connect} = require('mongoose');
const {mongourl} = require('./config.json');
module.exports = async ()=>{
  await   connect(mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })

      console.log(`Connected To MongoDB !`)
    
}