import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor?.profile_path}`;

  return (
    <View
      style={styles.container}>
        {actor.profile_path &&(
      <Image source={{uri}} style={{width: 50, height: 50, borderRadius: 10}} />
           
        )}

      <View  style={styles.actorInfo}>

        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          {actor.name}
        </Text>
        <Text style={{color: 'grey', fontSize: 16, fontWeight: 'bold'}}>
          {actor.character}
        </Text> 
      </View>
    </View>
  );
};

export default CastItem;


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        backgroundColor: 'white',
        marginBottom: 50,
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        height: 50,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 9,
    },
    actorInfo: {
      marginHorizontal: 20,
      marginTop: 0
    },

});
