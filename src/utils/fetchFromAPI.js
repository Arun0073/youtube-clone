import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  url: 'BASE_URL',
  params: {
    
    maxResults:'1000'
  },
  headers: {
    'X-RapidAPI-Key': '8519a5f25emshaa03d27905a1c2bp12a03cjsn5d109792457e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
