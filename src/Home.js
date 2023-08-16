import GenreList from "./GenreList";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";
import { useState } from "react";

const Home = () => {

    const apiKey = "api_key=3cab2543ba1aed5ce5d6eb68193ecd8a"
    const [selectedGenres, setSelectedGenres] = useState(JSON.parse(localStorage.getItem('selectedGenres')) || []);
    const [selectedtMovieId, setSelectedMovieId] = useState(0)



    return (
    <div className="home-component">
        <GenreList apiKey={apiKey}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}/>
        <MovieList apiKey={apiKey}
        selectedGenres={selectedGenres}
        />

    </div>);
}

export default Home;