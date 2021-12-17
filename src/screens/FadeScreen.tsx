import React from 'react'
import { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import useFade from '../hooks/useFade'

const FadeScreen = () => {

const {fadeIn, fadeOut, refOpacity} = useFade()
    return (
        <View style={{flex: 1,
                     backgroundColor: 'red',
                     justifyContent: 'center',
                     alignItems: 'center',}}>

         <Animated.View 
         style={{
                 backgroundColor: 'blue',
                 borderColor: 'white',
                 borderWidth: 5,
                 width: 150,
                 height: 150,
                 opacity: refOpacity,
                 }} />

                 <Button
                 title="FadeIn"
                 onPress={() => fadeIn()}
                  />

                  
                 <Button
                 title="FadeOut"
                 onPress={() => fadeOut()}
                  />
            
        </View>
    )
}

export default FadeScreen
