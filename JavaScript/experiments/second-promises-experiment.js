// Hardcoded Each user with an id and a list of posts.
const users = {
  Alice: {
    id: 1,
    posts: [
      { title: "Post 1", likes: 5 },
      { title: "Post 2", likes: 10 }
    ]
  },
  Jil: {
    id: 2,
    posts: [
      { title: "Post I", likes: 30 }
    ]
  }
}


// Fetches a user asynchronously by id this simulates an async I/O operation (e.g., database or API call).
function fetchUser(id) {
  return Promise.resolve(
    Object.values(users).find(user => user.id === id) || null
  )
}

function fetchPosts(user) {
  if (!user) throw new Error("The user does not exist")

  return Promise.resolve(user.posts)
}

function transformPosts(posts) {
  return posts.map(p => ({
    ...p,
    popular: p.likes > 7
  }))
}

function savePosts(posts) {
  console.log("Saved:", posts)
  return Promise.resolve("OK")
}

fetchUser(1)
  .then(fetchPosts)
  .then(transformPosts)
  .then(savePosts)
  .catch(console.error)

fetchUser(2)
  .then(fetchPosts)
  .then(transformPosts)
  .then(savePosts)
  .catch(console.error)

fetchUser(3)
  .then(fetchPosts)
  .then(transformPosts)
  .then(savePosts)
  .catch(console.error)
