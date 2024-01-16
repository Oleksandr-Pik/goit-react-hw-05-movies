import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import getMoviesDetails from 'servises/getMoviesDetails';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  column-gap: 20px;
  line-height: 1.8;
  padding-top: 20px;
  padding-bottom:20px;
  /* margin-bottom: 20px; */
  border-bottom: 1px solid #000000;
`;

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const imageBaseURL = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    getMoviesDetails(movieId)
      .then(function (response) {
        setMovie(response.data);
        console.log('response.data:', response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>← Go back</Link>
      {/* <p>MovieDetails {movieId}</p> */}
      {movie && (
        <Wrapper>
          <img src={imageBaseURL + movie.poster_path} alt="poster movie" />
          <div>
            <h1>
              {movie.title} 
            </h1>
            <h3>Дата релізу: {movie.release_date}</h3>
            <h3>Оригінальна назва: <span>"{movie.original_title}"</span></h3>
            
            <p>Оцінка користувачів: {movie.vote_average}</p>
            <p>Всього голосів: {movie.vote_count}</p>
            <h3>Про що фільм {movie.title}</h3>
            <p>{movie.overview || 'Нажаль інформація про цей фільм відсутня 😢'}</p>
            <h3>Жанр</h3>
            <p>
              {movie.genres.length >= 1 && (<span>{movie.genres[0].name}</span>)}
              {movie.genres.length >= 2 && (<span>, {movie.genres[1].name}</span>)}
              {movie.genres.length >= 3 && (<span>, {movie.genres[2].name}</span>)}
            </p>
          </div>
        </Wrapper>
      )}
      <div className='wrapper'>
      <h3>Додаткова інформація</h3>
      <ul>
        <li>
          <Link to="cast">Акторський склад</Link>
        </li>
        <li>
          <Link to="reviews">Reviews (en)</Link>
        </li>
      </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
