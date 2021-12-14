import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {View, Text, Image, StyleSheet, Touchable} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  height?: number
  width?: number;
  movie?: Movie
}

const MoviePoster = ( {movie, width = 300, height = 420}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigator.dispatch(CommonActions.navigate('DetailsScreen', movie))
      }
      style={{
        width,
        height,
        marginHorizontal: 10,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
});
