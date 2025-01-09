const axios = require('axios');

const url = 'https://be.lootlabs.gg/api/lootlabs/url_encryptor';
const headers = {
    Authorization: 'Bearer YOUR_API_TOKEN'
};
const data = {
    destination_url: 'https://google.com'
};

axios.post(url, data, { headers: headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
