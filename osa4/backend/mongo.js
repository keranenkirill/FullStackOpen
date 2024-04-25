const mongoose = require('mongoose')

const url =
'mongodb+srv://kirillkeranen:PSWWD@fullstack24.n6uv5yd.mongodb.net/BLApp?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)
mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: String
})
const Blog = mongoose.model('Blog', blogSchema)

// const blog = new Blog({
//   title: "JS BCKND",
//   author: "KEK",
//   url: "URLIII",
//   likes: "0"
// })

// kantaan tallenettujen olioiden hakeminen
Blog.find({}).then(result => {
  result.forEach(blog => {
    console.log(blog)
  })
  mongoose.connection.close()
})

// blog.save().then(result => {
//  console.log('blog saved!', result)
//  mongoose.connection.close()
// })
