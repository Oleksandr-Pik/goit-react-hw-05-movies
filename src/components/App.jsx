import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import NotFound from './NotFound/NotFound';
import { lazy } from 'react';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
