import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getTrandingMovies from 'servises/getTrendingMovies';

const TrandingMovies = () => {
  const [movies, setmovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrandingMovies()
      .then(function (response) {
        setmovies(response.data.results);
        // console.log('movies', movies);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      {console.log(movies)}
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TrandingMovies;
