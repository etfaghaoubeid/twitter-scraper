import axios from 'axios'
import  cheerio from 'cheerio'

export async function getFollowers(username){
    const {data:html} = await axios.get(`https://twitter.com/${username}`)
    const $ = cheerio.load(html)
    const followers = $('[data-nav="followers"] .ProfileNav-value')
    return followers.html();
}

export async function getLikes(username){
    const {data:html} = await axios.get(`https://twitter.com/${username}`)
    const $ = cheerio.load(html)
    const followers = $('[data-nav="favorites"] .ProfileNav-value')
    console.log(  followers.html());
    return followers.html();
}

export async function getFollowing(username){
    const {data:html} = await axios.get(`https://twitter.com/${username}`)
    const $ = cheerio.load(html)
    const followers = $('[data-nav="following"] .ProfileNav-value')
    console.log(  followers.html());
    return followers.html();
}
