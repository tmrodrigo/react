import "whatwg-fetch";

const getUsers = () => {
	return fetch('http://localhost:8000/api/users')
		.then( res => res.json() );
}

const getPosts = () => {
	return fetch('http://localhost:8000/api/posts')
		.then( res => res.json() );
}
const api = {
	getUsers,
	getPosts
}

export default api;
