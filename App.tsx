import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { MyStack } from './src/navigation/Navigation';
import FadeScreen from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack /> 
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App
