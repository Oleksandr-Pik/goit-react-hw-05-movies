import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getMovieReview from 'servises/getMovieReview';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  // const location = useLocation();
  const { movieId } = useParams();
  // const imageBaseURL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    getMovieReview(movieId)
      .then(function (response) {
        setReviews(response.data.results);
        console.log('response.data:', response.data.results);
        // console.log('cast', cast)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);
  return (
    <div className='wrapper'>
      {/* Reviews {movieId} */}
      {reviews && (
        <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>Content: {review.content}</p>
          {/* <p>URL: {review.url}</p> */}
        </li>
          )
        })}
      </ul>
      )}
    </div>
  )
}

export default Reviews
