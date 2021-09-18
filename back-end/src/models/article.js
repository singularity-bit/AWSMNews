const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const articleSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    authors:[
        {
            type:String,
            required:true
        }
    ],
    tag:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }

},{timestamps:true})

const Article=mongoose.model('Article',articleSchema);

module.exports=Article;