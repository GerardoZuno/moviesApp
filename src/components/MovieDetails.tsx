import React from 'react';
import {View, Text} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast?: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="star-outline" size={25} color="black" />
          <Text style={{color: 'grey'}}>  {movieFull.vote_average} </Text>
          <Text style={{color: 'grey'}}>
             -  {movieFull.genres.map(genre => genre.name).join('. ')}
          </Text>
        </View>

        <Text style={{color: 'black', fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
            Historia
        </Text>
        <Text style={{color: 'grey', fontSize: 16}}>
            {movieFull.overview}
        </Text>

        <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold'}}>
            Presupuesto
        </Text>
        <Text style={{color: 'grey', fontSize: 16, marginBottom: 10}}>
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>

      </View>

      {/* Casting */}
    </>
  );
};

export default MovieDetails;
