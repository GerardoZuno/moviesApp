import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {View, Text, Button} from 'react-native';

const HomeScreen = () => {
  const navigator = useNavigation();

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
