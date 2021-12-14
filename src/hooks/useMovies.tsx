import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}


const useMovies = () => {
  const [isLoading, setisLoading] = useState(false);
  const [moviesState, setmoviesState] = useState<MoviesState>({
      nowPlaying: [],
      popular: [],
      topRated: [],
      upcoming: [],
  });


  const getMovies = async () => {
    setisLoading(true);
    const now_PlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise =   movieDB.get<MovieDBMoviesResponse>('/popular');
    const top_RatedPromise  = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resps = await Promise.all([
      now_PlayingPromise,
      popularPromise,
      top_RatedPromise, 
      upcomingPromise])


      setmoviesState({
        nowPlaying: resps[0].data.results,
        popular: resps[1].data.results,
        topRated: resps[2].data.results,
        upcoming: resps[3].data.results
      })




    
        setTimeout(() => {
            setisLoading(false);

        }, 1500)
      
        
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};

export default useMovies;
