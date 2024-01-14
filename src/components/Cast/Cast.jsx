import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getMovieCast from 'servises/getMovieCast';

const Cast = () => {
  const [cast, setCast] = useState(null);
  // const location = useLocation();
  const { movieId } = useParams();
  const imageBaseURL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    getMovieCast(movieId)
      .then(function (response) {
        setCast(response.data.cast);
        console.log('response.data:', response.data.cast);
        // console.log('cast', cast)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className='wrapper'>
      {/* Cast {movieId} */}
      {cast && (
        <ul>
        {cast.map(el => {
          return (
            <li key={el.cast_id}>
          {el.profile_path && <img src={imageBaseURL + el.profile_path} alt={el.name} />}
          <p>{el.name}</p>
          <p>Роль: {el.character}</p>
        </li>
          )
        })}
      </ul>
      )}
    </div>
  )
}

export default Cast
