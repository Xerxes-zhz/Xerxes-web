const axios = require('axios');

export function hello(){
    const response = axios.get('localhost:8080')
    console.log('response: ',response);
    return response
}

export default hello;