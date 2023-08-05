const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
const User=mongoose.model('User',new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    dept:{type:String,required:true},
    regno:{type:Number,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:true}
}));
module.exports=User;