const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://https://elenakorneva.site/api/auth/'
  : 'http://localhost:8080/api/auth/'

export default {
  main: baseURL,
  login: `${baseURL}/login`,
  posts: `${baseURL}/posts`
}
