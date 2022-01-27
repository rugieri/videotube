import axios from 'axios';

const KEY = 'AIzaSyBjlzqp7XuQGjBS-8PabnPxx59RrT6DQ8c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
