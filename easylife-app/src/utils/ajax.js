import { getTokenBearer } from '~/services/auth';

const BASE_URL = "http://localhost:3001";

export const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': getTokenBearer()
});
  
export const post = (path, data, customHeaders) => {
    return fetch(BASE_URL + path, {
      method: 'POST',
      headers: customHeaders || getHeaders(),
      body: JSON.stringify(data)
    });
}
  
export const get = path => fetch(BASE_URL + path,{
    method: 'GET',
    headers: getHeaders()
});


export const deleted = (path, customHeaders) => {
    return fetch(BASE_URL + path, {
      method: 'DELETE',
      headers: customHeaders || getHeaders()
    });
}