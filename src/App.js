import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import AddMovies from './components/AddMovies';
import { moviesData } from './components/MoviesData';
import { useState } from 'react';
import SearchMovie from './components/SearchMovie';
import Trailer from './components/Trailer';
import MovieCard from './components/MovieCard';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MoviesList
                moviesList={moviesList}
                nameSearch={nameSearch}
                ratingSearch={ratingSearch}
              />
              <AddMovies addNewMovie={addNewMovie} />
              <SearchMovie
                setNameSearch={setNameSearch}
                setRatingSearch={setRatingSearch}
                ratingSearch={ratingSearch}
              />
            </div>
          }
        />
        <Route path="/trailer/:iduser" element={<Trailer />} />
        <Route path="/" element ={<MovieCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
