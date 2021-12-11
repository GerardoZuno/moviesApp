import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {View, Text, Button} from 'react-native';
import { useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

const HomeScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
      const getMovies = async() => {
        try{
            const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
            console.log(resp.data.results[0].title)
        }catch(error){
            console.log(error, 'Something went wrong')
        }
     


      }
      getMovies()


         
         

  }, [])

  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Detalles"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Details'}))
        }
      />
    </View>
  );
};

export default HomeScreen;
