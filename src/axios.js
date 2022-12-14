import axios from 'axios';

export default axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.API_KEY}`,
  headers: {
    'Content-type': 'application/json',
  },
});
