function fetchUser(id) {
  return Promise.resolve({ id, name: "Alice" })
}

function fetchPosts(user) {
  return Promise.resolve([
    { title: "Post 1", likes: 5 },
    { title: "Post 2", likes: 10 }
  ])
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
  .then(console.log)
  .catch(console.error)
