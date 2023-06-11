import axios from "axios";

const handleError = (error) => {
    throw new Error(error)
}

const getProfile = (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
        .then(user =>  user.data)
        .catch(handleError)
}

const getRepos = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
        .then(user =>  user.data)
        .catch(handleError)
}

const getStarCount = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
}

const calculateScore = ( profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);

    return followers + totalStars;
}

const getUserData = (username) => {
    return  Promise.all([
        getProfile(username),
        getRepos(username)
    ]).then(([profile, repos]) => {
        return{
            profile,
            score: calculateScore(profile, repos)
        }
    })
    .catch(handleError)
}

const sortPlayers = (players) => {
    return players.sort((a, b) => b.score - a.score);
}

export const makeBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}



export const fetchPopularRepos = (language) => {
    return axios.get(encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`))
        .then(response => response.data.items)
        .catch(error=>{
            throw new Error(error)
        })
}



