const axios = require('axios');

const api_token = 'YOUR_API_TOKEN';
const destination_url = 'https://google.com';
const url = `https://be.lootlabs.gg/api/lootlabs/url_encryptor?destination_url=${encodeURIComponent(destination_url)}&api_token=${api_token}`;

axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
