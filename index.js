import axios from 'axios'
import  cheerio from 'cheerio'

async function getData(){
    const {data:html} = await axios.get('https://twitter.com/etfaghaoubeid')
    const $ = cheerio.load(html)
    console.log('+++++++++++++++++++++++++++++++++++++');
    const followers = $('[data-nav="followers"] .ProfileNav-value')
    console.log(followers.html());
}

getData()