import axios from 'axios';

export const isToken = () : boolean => (localStorage.getItem('@token')) ? true : false;
export const getToken = () : string|null => localStorage.getItem('@token');

export const openApi = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

export const authApi =  axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: { 
    'content-type': 'application/json',
    Authorization: `Bearer ${getToken()}`
  }
});