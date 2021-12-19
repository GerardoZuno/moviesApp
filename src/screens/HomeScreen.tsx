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
import GradientBG from '../components/GradientBG';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColors';
import { useContext } from 'react';
import { GradientContext } from '../Context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const navigator = useNavigation();

  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext)

  const {nowPlaying, popular, upcoming, topRated, isLoading} = useMovies();

  const getPosterColors = async(index: number) => {
    const movie = nowPlaying[index];

    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;



    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri)

    setMainColors({primary, secondary})
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="black" size={100} />
      </View>
    );
  }

  return (
    <GradientBG>
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
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Proximamente" movies={upcoming} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
        </View>
      </ScrollView>
    </GradientBG>
  );
};

export default HomeScreen;
