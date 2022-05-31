import axios from 'axios';
const KEY = 'AIzaSyDQzBXP8p_LCDNv_tRRwaiIz0JyzvTZprY';


export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})
