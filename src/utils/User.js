

export default class User {

    // Fetching a list of users
    static async index() {
        let response = await fetch("https://api.github.com/users")
        .then((response) => response.json())
        return response
    }

    // Fetching a user
    static async show(username) {
        let response = await fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        return response
    }

    static async fetchRepos(username) {
        let response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10`)
        .then((response) => response.json())
        return response
    }

    static async searchUser(query) {
        let response = await fetch(`https://api.github.com/search/users?q=${query}&per_page=10`)
        .then((response) => response.json())
        return response
    }

}

