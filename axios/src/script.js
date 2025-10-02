// Import Axios
const axios = require('axios');

// Make a simple GET request
// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
// 	// Handle successful response
// 	console.log('Response:', response.data);
//   })
//   .catch(error => {
// 	// Handle error
// 	console.error('Error:', error);
//   });

const fetchPosts = () => {
	axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
	// Handle successful response
	console.log('Response:', response.data);
  })
  .catch(error => {
	// Handle error
	console.error('Error:', error);
  });
}

async function fetchUsers() {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
	console.log('Response:', response.data);		
	} catch (error) {
		console.error('Error: ', error);
	}
}

fetchPosts();
// fetchUsers();