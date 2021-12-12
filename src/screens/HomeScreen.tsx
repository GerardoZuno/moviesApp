import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

import {View, Text, Button, ActivityIndicator, Dimensions} from 'react-native';
import {useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const navigator = useNavigation();

  const {top} = useSafeAreaInsets();

  const {moviesNow, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="black" size={100} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      {/*
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
      } */}

      <View style={{
          height: 440,
          
      }}>
        <Carousel
          data={moviesNow}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
