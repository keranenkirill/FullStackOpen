const { test, after, beforeEach } = require("node:test")
const Blog = require("../models/blog")
const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const assert = require("node:assert/strict")
const helper = require("./test_helper")


beforeEach(async () => {
   await Blog.deleteMany({})
   await Blog.insertMany(helper.initialBlogs)
})



test("blogs returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/)
})

//4.8: blogilistan testit, step 1
test("there are two blogs", async () => {
  const response = await api.get("/api/blogs")
  assert.strictEqual(response.body.length, helper.initialBlogs.length)
})

test('the first blog is "BLOG1"', async () => {
  const response = await api.get("/api/blogs")
  const title = response.body.map((e) => e.title)
  assert(title.includes("BLOG1"))
})

test.only('the second blog is "BLOG2", auth is "AUTH2"', async () => {
  const response = await api.get("/api/blogs")
  const title = response.body.map((e) => e.title)
  assert(title.includes("BLOG2", "AUTH2"))
})

test("a valid blog added ", async () => {
  const newBlog = {
    title: "BLOG3",
    author: "AUTH3",
    url: "TestURL3",
    likes: "345",
  }
  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/)
  const response = await api.get("/api/blogs")
  console.log(response)
  const title = response.body.map((e) => e.title)
  assert.strictEqual(response.body.length, helper.initialBlogs.length + 1)
  assert(title.includes("BLOG3"))
})

test("blog without title not added", async () => {
  const newBlog = {
    author: "AUTH4",
    url: "TestURL4",
    likes: "456",
  }
  await api.post("/api/blogs").send(newBlog).expect(400)
  const response = await api.get("/api/blogs")
  console.log(response)
  assert.strictEqual(response.body.length, helper.initialBlogs.length)
})

test("a specific blog can be viewed", async () => {
  const blogsAtStart = await helper.blogsInDb()

  const blogToView = blogsAtStart[0]

  const resultBlog = await api
    .get(`/api/blogs/${blogToView.id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/)

  assert.deepStrictEqual(resultBlog.body, blogToView)
})

test("a blog can be deleted", async () => {
  const blogsAtStart = await helper.blogsInDb()
  const blogToDelete = blogsAtStart[0]
  await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204)
  const blogsAtEnd = await helper.blogsInDb()
  const titles = blogsAtEnd.map((r) => r.title)
  assert(!titles.includes(blogToDelete.title))
  assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length - 1)
})

after(async () => {
  await mongoose.connection.close()
})
