const  mongoose=require('mongoose')
const connect=mongoose.connect("mongodb://localhost:27017/athulya")

connect.then(()=>{
    console.log("database connected successfully");
})
.catch(()=>{
    console.log("Databse cannot be connected")
})
 const data=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
})

const collection=new mongoose.model("person",data)

module.exports=collection;