// Basic Fetch Example: Get one user's name and display it
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    document.getElementById('output').innerText = users[0].name;
  })
  .catch(error => console.error('Error:', error));


// --- Practice Challenge Starter ---
// TODO: Fetch a list of posts from https://jsonplaceholder.typicode.com/posts
// and display the titles of the first 5 posts inside the #posts div

// Hint:
// - Use a loop to create paragraph elements
// - Append each paragraph to the #posts div
