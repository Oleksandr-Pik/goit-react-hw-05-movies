import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import getMovies from 'servises/getMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    // if (!query) return;
    // getMovies(query)
    //   .then(function (response) {
    //     setMovies(response.data.results);
    //     console.log(response.data.results);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, []);

  const updateQueryString = evt => {
    const queryValue = evt.target.value;
    if (queryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryValue });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (!query) return;
    getMovies(query)
      .then(function (response) {
        setMovies(response.data.results);
        console.log(response.data.results);
      
      })
      .catch(function (error) {
        console.error(error);
      });
		
    console.log('clik on search');
  };

  // console.log(location);

  return (
    <>
      <form role="search" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button type='submit'>
          Search
        </button>
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
