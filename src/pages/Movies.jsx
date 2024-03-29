import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import getMovies from 'servises/getMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') ?? '')
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;
    getMovies(searchQuery)
      .then(function (response) {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchQuery]);

  const updateQueryString = evt => {
    const queryValue = evt.target.value;
    if (queryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryValue });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('searchQuery', searchQuery);
    setSearchQuery('');
    setSearchQuery (evt.target[0].value);
    
    console.dir( evt.target[0].value)
    console.log('clik on search');
    console.log('searchQuery:', searchQuery)

  };

  return (
    <>
      <form role="search" onSubmit={handleSubmit}>
        <input type="text" 
        value={query} 
        onChange={updateQueryString} 
        />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
