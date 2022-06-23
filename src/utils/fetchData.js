import axios from "axios"


export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_EXERCISE_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  params: {
    id: 'YQHsXMglC9A',
    hl: 'en',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY, 
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
  

export const fetchData = async (url,key) => {
    const response = await axios.request(url,key)
    return response.data;
}