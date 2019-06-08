import axios from 'axios'
import  cheerio from 'cheerio'

export async function getFollowers(){
    const {data:html} = await axios.get('https://twitter.com/etfaghaoubeid')
    const $ = cheerio.load(html)
    const followers = $('[data-nav="followers"] .ProfileNav-value')
    console.log(followers.html());
    
    return followers.html();
}
