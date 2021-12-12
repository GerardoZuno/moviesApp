import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

const useMovies = () => {
  const [isLoading, setisLoading] = useState(false);
  const [moviesNow, setmoviesNow] = useState<Movie[]>([]);

  const getMovies = async () => {
    setisLoading(true);
    try {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const movies = resp.data.results;
        setmoviesNow(movies);
        setTimeout(() => {
            setisLoading(false);

        }, 1500)
      
    } catch (error) {
      console.log(error, 'Something went wrong');
      setisLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesNow,
    isLoading,
  };
};

export default useMovies;
