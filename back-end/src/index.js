const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const Article  =require('./models/article')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const port = 3001



const uri = "mongodb+srv://admin:priwet12@cluster0.jnzfb.mongodb.net/article-db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/post-article',(req,res)=>{
  const {title,image,content,authors,tag,type}=req.body
  console.log("what received",req.body)
  const article=new Article({
    title:title,
    image:image,
    content:content,
    authors:authors,
    tag:tag,
    type:type
  })
  article.save()
    .then(result=>res.send(result))
    .catch(err=>res.send(err))
})

app.get('/get-articles',(req,res)=>{
  Article.find()
    .then(result=>res.send(result))
    .catch(err=>res.send(err))
})
app.get('/breaking',(req,res)=>{
  Article.where('type','BREAKING')
    .then(result=>res.send(result))
    .catch(err=>res.send(err))
})

app.get('/recommended',(req,res)=>{
  Article.where('type','RECOMMENDED')
    .then(result=>res.send(result))
    .catch(err=>res.send(err))
})
app.get('/latest',(req,res)=>{
  Article.find().sort({createdAt:'desc'})
    .then(result=>res.send(result))
    .catch(err=>res.send(err))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})