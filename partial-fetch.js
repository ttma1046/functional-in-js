const fetch = require('node-fetch');

const getFromAPI = baseURL => endpoint => cb => 
    fetch(`${baseURL}${endpoint}`)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(error => {
            console.error(error.message)
        })

const getGithub = getFromAPI('https://api.github.com');

const getGithubUsers = getGithub('/users');
const getGithubRepos = getGithub('/repositories');

getGithubUsers(data => {
    console.log(data.map(user => user.login))
})

getGithubUsers(data => {
    console.log(data.map(user => user.avatar_url))
})

const array = [1, 2, 3];
const double = x => x * 2
array.map(double);

// Legibility
// Reduce surface area for bugs
// unit test our named function
