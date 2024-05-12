const Blog = require("../models/blog")

const initialBlogs = [
  {
    title: "BLOG1",
    author: "AUTH1",
    url: "TestURL1",
    likes: "123",
  },
  {
    title: "BLOG2",
    author: "AUTH2",
    url: "TestURL2",
    likes: "234",
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: "willremovethissoon" })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
}
