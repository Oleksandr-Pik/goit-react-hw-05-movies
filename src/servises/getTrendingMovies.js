import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: { language: 'uk-UA'},
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhM2MyMjFlZjA3NDBhMDFlNmMwZTllNzdkNzJkMCIsInN1YiI6IjY1OTU0Y2UwYTY5OGNmNWExMzQzYTA1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQiqVQlKVKjNnvB8aixow-b7QW092Q8cG4KYkgdhwxo',
  },
};

const getTrandingMovies = () => {
 return axios
    .request(options)
  };
  
export default getTrandingMovies;
