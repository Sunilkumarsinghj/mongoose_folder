const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/smartPhones');

module.exports=mongoose;