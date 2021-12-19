import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../Context/GradientContext';

interface Props{
    children: JSX.Element | JSX.Element[] 

}

const GradientBG = ({children}: Props) => {

  const {colors} = useContext(GradientContext)


  
    return (
        <View style={{flex: 1}}>
            <LinearGradient
            colors={[colors.primary, colors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.5, y: 0.7}}

             />
             {children}
        </View>
    )
}

export default GradientBG