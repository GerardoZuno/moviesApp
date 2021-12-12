import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {View, Text, Button, ActivityIndicator} from 'react-native';
import { useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigator = useNavigation();

  const {top} = useSafeAreaInsets()


 const {moviesNow, isLoading} = useMovies()


 if(isLoading) {
     return (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
             <ActivityIndicator color='black' size={100}/>
         </View>
     )

 }    


  return (
    <View style={{marginTop: top + 20}}>
       <MoviePoster
       movie={moviesNow[4]}/>
      <Button
        title="Detalles"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Details'}))
        }
      />

    

      {
          moviesNow?.map(movie => (
              <Text key={movie.id}>{movie.title}</Text>
          ))
      }
    </View>
  );
};

export default HomeScreen;
