import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterface';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}
 
const DetailsScreen = ({route}: Props) => {
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  /*Forma rapida no ideal
    const movie = route.params as Movie*/

   const {cast, isLoading, movieFull} = useMovieDetails(movie.id)

  console.log({movieFull});
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      
        {
            isLoading ? (
                <ActivityIndicator size={40} style={{marginTop: 20}}/>

            ): <MovieDetails movieFull={movieFull!} cast={cast}/>
        }

    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
   
    elevation: 5,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});
