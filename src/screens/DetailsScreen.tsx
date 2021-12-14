import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react'
import { View, Text } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

const DetailsScreen = ({route}: Props) =>  {


    /*Forma rapida no ideal
    const movie = route.params as Movie*/
    
    const movie = route.params

    console.log(movie.original_title)
    return (
        <View>
            <Text style={{color: 'black'}}>
            {movie.original_title}
              </Text>            
        </View>
    )
}

export default DetailsScreen
