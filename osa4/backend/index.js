require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const Blog = require("./models/blog")

app.use(cors())
app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method)
  console.log("Path:  ", request.path)
  if (request.method !== "GET") {
    console.log("Body:  ", request.body)
  }
  console.log("---")
  next()
}

app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

app.get("/", (request, response) => {
  response.send("<h1>BlogiLista App</h1>")
})

app.get("/api/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post("/api/blogs", (request, response) => {
  const body = request.body

  if (!body.title || !body.author || !body.url) {
    return response.status(400).json({
      error: "content missing",
    })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
  })
  blog.save().then((savedNote) => {
    console.log(savedNote)
    response.json(savedNote)
    
  })
})

app.use(unknownEndpoint)
const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)