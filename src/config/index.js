const URL_DEV = 'http://localhost:8080';
const URL_PROD = 'https://aluraflix-wjuniori.herokuapp.com';
const URL_BASE = window.location.hostname.includes('localhost') ? URL_DEV : URL_PROD;

export default {
  URL_BASE,
};
