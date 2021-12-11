import axios from "axios";

 const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '55c0329a466b11eee304f52d8e49f0a1',
        language: 'es-Es'
    }

})

export default movieDB