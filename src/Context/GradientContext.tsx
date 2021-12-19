import React, { createContext, useState } from "react";

interface ImageColors {
    primary: string;
    secondary: string;
    


}

interface contextProps {
    colors: ImageColors
    prevColors: ImageColors
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as contextProps)

export const GradientProvider = ({children}: any) => {

    const [colors, setcolors] = useState<ImageColors>({
        primary: 'red',
        secondary: 'blue',
    })

    const [prevColors, setprevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'secondary',
    })


    const setMainColors  = (colors: ImageColors) => {
        setcolors(colors)
    }

    const setPrevMainColors  = (colors: ImageColors) => {
              setprevColors(colors)
    }


    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
            
        }}>
          {children}
        </GradientContext.Provider>
    )

       
    
 }