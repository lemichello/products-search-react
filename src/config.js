export default {
  apiUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : 'https://products-search-api.herokuapp.com/api'
};
