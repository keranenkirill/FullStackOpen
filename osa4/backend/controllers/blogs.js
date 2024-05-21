const blogsRouter = require("express").Router()
const Blog = require("../models/blog")


blogsRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.get("/:id", async (request, response, next) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

blogsRouter.post("/", async (request, response, next) => {
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
  const savedBlog = await blog.save()
  //console.log(savedBlog)
  //response.json(savedBlog)
  response.status(201).json(savedBlog)
})

blogsRouter.delete("/:id", async (request, response, next) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

blogsRouter.put("/:id", async (request, response, next) => {
  const body = request.body
  const blog = {
    likes: body.likes || 0,
  }
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true,
  })

  if (updatedBlog) {
    response.json(updatedBlog)
  } else {
    response.status(404).end()
  }
})


module.exports = blogsRouter
