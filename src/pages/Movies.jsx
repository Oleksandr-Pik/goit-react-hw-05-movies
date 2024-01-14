import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get("movieId") ?? "";

  useEffect(() => {
  console.log('movieId:', movieId)
  }, [movieId])
  
  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };
  
  console.log(location);

  return (
    <div>
      Movies
      <input
        type="text"
        value={movieId}
        onChange={updateQueryString}
      />
      <button type="button">Search</button>
    </div>
  );
};

export default Movies;
