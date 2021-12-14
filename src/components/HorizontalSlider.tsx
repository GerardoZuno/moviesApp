import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'


interface Props {
    title: string;
    movies?: Movie[],


}

const HorizontalSlider = ({title, movies}: Props) => {
    return (
        <View  style={{
            backgroundColor: 'red',
            height: (title) ? 260 : 220
          }}>
          <Text style={{fontSize: 30, marginLeft: 10, fontWeight: 'bold'}}>{title}</Text>
          <FlatList
            data={movies}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
            
        </View>
    )
}

export default HorizontalSlider
