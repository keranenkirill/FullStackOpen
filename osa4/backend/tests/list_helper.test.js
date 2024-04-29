const { test, describe } = require("node:test")
const assert = require("node:assert")
const listHelper = require("../utils/list_helper")
const { listWithZeroBlogs, listWithOneBlog, listWithMultipleBlogs } = require("./blogLists_testData")


test("dummy returns one", () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe("total likes", () => {
  
  test("of empty list is zero", () => {
    const result = listHelper.totalLikes(listWithZeroBlogs)
    assert.strictEqual(result, 0)
  })

  test("when list has only one blog equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(listWithMultipleBlogs)
    assert.strictEqual(result, 46)
  })
})

describe("max likes", () => {
  test("when list is empty, max likes is null", () => {
    const result = listHelper.maxLikes(listWithZeroBlogs)
    assert.strictEqual(result, null)
  })

  test("when there's only one blog, max likes equals the likes of that blog", () => {
    const result = listHelper.maxLikes(listWithOneBlog)
    assert.deepStrictEqual(result, {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5,
    })
  })

  test("when there are multiple blogs, max likes returns the blog with the most likes", () => {
    const result = listHelper.maxLikes(listWithMultipleBlogs)
    assert.deepStrictEqual(result, {
      title: "First class tests",
      author: "Robert C. Martin",
      likes: 20,
    })
  })
})