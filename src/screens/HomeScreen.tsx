import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from 'react-native';
import {MovieDBMoviesResponse} from '../interfaces/movieInterface';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const navigator = useNavigation();

  const {top} = useSafeAreaInsets();

  const {nowPlaying, popular, upcoming, topRated, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="black" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
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

        <View
          style={{
            height: 440,
          }}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        
        <HorizontalSlider title='Populares' movies={popular}/>
        <HorizontalSlider title='Proximamente' movies={upcoming}/>
        <HorizontalSlider title='Top Rated' movies={topRated}/>


      </View>
    </ScrollView>
  );
};

export default HomeScreen;
