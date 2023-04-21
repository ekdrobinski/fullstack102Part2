function getAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        var output = document.getElementById("output");
        output.innerHTML = "";
        posts.forEach(post => {
            console.log(post.title);
        });
      });
  }
  
  function getPostWithId10() {
    fetch("https://jsonplaceholder.typicode.com/posts/10")
      .then(response => response.json())
      .then(post => {
        var output = document.getElementById("output");
        output.innerHTML = "<p>" + post.title + "</p><p>" + post.body + "</p>";
      });
  }
  
  function createNewPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "New Post",
        body: "Lorem ipsum dolor sit amet",
        userId: 1
      })
    })
      .then(response => response.json())
      .then(post => {
        var output = document.getElementById("output");
        output.innerHTML = "<p>New post created with id " + post.id + "</p>";
      });
  }
  
  function replacePostWithId12() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 12,
        title: "Replaced Post",
        body: "Lorem ipsum dolor sit amet",
        userId: 1
      })
    })
      .then(response => response.json())
      .then(post => {
        var output = document.getElementById("output");
        output.innerHTML = "<p>Post with id 12 replaced:</p><p>" + post.title + "</p><p>" + post.body + "</p>";
      });
  }
  
  function updateTitleOfPostWithId12() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Updated Post Title"
      })
    })
      .then(response => response.json())
      .then(post => {
        var output = document.getElementById("output");
        output.innerHTML = "<p>Post with id 12 updated:</p><p>" + post.title + "</p><p>" + post.body + "</p>";
      });
  }
  
  function deletePostWithId12() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "DELETE"
    })
      .then(response => {
        var output = document.getElementById("output");
        output.innerHTML = "<p>Post with id 12 deleted.</p>";
      });
  }
  