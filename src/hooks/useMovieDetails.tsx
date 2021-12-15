import { useEffect } from "react"
import { useState } from "react"
import movieDB from "../api/movieDB"
import { MovieFull } from "../interfaces/movieInterface"

interface MovieDetails {
    cast: any[],
    isLoading: boolean,
    movieFull: MovieFull
}


const useMovieDetails = (movieId: number) => {
    const [state, setstate] = useState<MovieDetails>()


    const getMovieDetails = async() => {

    const resp = await movieDB.get<MovieFull>(`${movieId}`)
    console.log(resp.data.overview)

   
}

   useEffect(() => {
       getMovieDetails()
   }, [])

    return {
      state
    }
}

export default useMovieDetails