const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {
  return blogs.reduce((totalLikes, blog) => totalLikes + blog.likes, 0)
}


const maxLikes = (blogs) => {
  if (blogs.length === 0) return null 

  let maxLikesBlog = blogs[0] 
  for (const blog of blogs) {
    if (blog.likes > maxLikesBlog.likes) {
      maxLikesBlog = blog 
    }
  }
  return {
    title: maxLikesBlog.title,
    author: maxLikesBlog.author,
    likes: maxLikesBlog.likes
  }
}


module.exports = {
  dummy,
  totalLikes,
  maxLikes
}