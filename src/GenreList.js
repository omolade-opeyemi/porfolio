import useFetch from "./useFetch";
import { useState } from "react";

const GenreList = ({ apikey, setSelectedGenres, selectedGenres }) => {

    // const API_URL = `https://api.themoviedb.org/3/genre/movie/list?${apikey}`;
    const API_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=3cab2543ba1aed5ce5d6eb68193ecd8a"
    const { data: genres, isPending, error } = useFetch(API_URL)

    const onGenreClick = (genreId) => {
        let isPresent = false;
        for (let id of selectedGenres) {
            if (id === genreId) {
                isPresent = true;
                break;
            }
        }
        if (isPresent) {
            setSelectedGenres(
                selectedGenres.filter((item) => item !== genreId));
        } else {
            setSelectedGenres((selectedGenres) => [...selectedGenres, genreId]);
        }

    };

    return (
        <div className="genre-list">
            <input type="search" name="" id="search" />

            {genres &&
                <div className="one">
                    <h2>Get Top Movies Based on Genre</h2>
                    <div className="body">
                        {genres.genres.map((genre) =>
                            <div className={selectedGenres.includes(genre.id) ? 'selected' : 'genre'} key={genre.id}>
                                <p onClick={() => onGenreClick(genre.id)}>{genre.name} {selectedGenres.includes(genre.id) && <span>&#10006;</span>}</p>
                                {/* <p>{genre.id}</p> */}
                            </div>
                        )}
                    </div>
                </div>
            

        }
    </div>);
}

export default GenreList;
