import useFetch from "./useFetch";
import { Link } from 'react-router-dom'


const MovieList = ({ apiKey, selectedGenres }) => {


    const API_IMG = "https://image.tmdb.org/t/p/w500"


    const API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=true&sort_by=popularity.desc&${apiKey}&release_date.lte=2019-12-12&with_genres=${encodeURI(
        selectedGenres.join(",")
    )}`

    const API_LATEST = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&${apiKey}`

    let URL = ''

    if (selectedGenres.length > 0) {
        URL = API_URL
    }
     else {
        URL = API_LATEST
    }
    localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));

    const { data: movies, isPending, error } = useFetch(URL)

    return (
        <div className="movie-list">
            {selectedGenres.length > 0 ? <h1>Based on your seleection</h1> : <h1>Popular Movies</h1>}
            
            {movies && (
                <div className="movie-list-body">
                    {movies.results.map((movie) =>
                        <div className="movie" key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img src={API_IMG + movie.poster_path} alt="poster_path" />
                                <div className="moviebrief">
                                    <h2>{movie.title}</h2>
                                    <p>&#9733;&#9733;&#9733;&#9733; ({movie.vote_average})</p>
                                </div>
                            </Link>
                            {/* onClick={()=>setSelectedMovieId(movie.id)} */}

                        </div>
                    )}
                </div>
            )
            }
        </div>
    );

}




export default MovieList;