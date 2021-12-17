import { useRef } from "react"
import { Animated } from "react-native"

const useFade = () => {
    const refOpacity = useRef(new Animated.Value(0)).current
    
    const fadeIn = () => {
        Animated.timing(
            refOpacity,
            {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }
        ).start()
    }

     
    const fadeOut = () => {
        Animated.timing(
            refOpacity,
            {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }
        ).start()
    }
    return {
        refOpacity, fadeIn, fadeOut
    }
}

export default useFade
