import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgers-26771.firebaseio.com/'
});

export default instance;
