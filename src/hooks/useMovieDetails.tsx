import { useEffect } from "react"
import { useState } from "react"
import movieDB from "../api/movieDB"
import { Cast, CreditsResponse } from "../interfaces/creditsInterface"
import { MovieFull } from "../interfaces/movieInterface"

interface MovieDetails {
    cast: Cast[],
    isLoading: boolean,
    movieFull?: MovieFull
}


const useMovieDetails = (movieId: number) => {
    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })


    const getMovieDetails = async() => {

    const movieDetailsPromise = movieDB.get<MovieFull>(`${movieId}`)
    const castsPromise = movieDB.get<CreditsResponse>(`${movieId}/credits`)

    const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castsPromise])
    
    setstate({
        isLoading: false,
        movieFull: movieDetailsResp.data,
        cast: castPromiseResp.data.cast

    })
}



   useEffect(() => {
       getMovieDetails()
   }, [])

    return {
      ...state
    }
}

export default useMovieDetails
