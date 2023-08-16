import MovieList from "./MovieList";
import SingleMovie from "./SingleMovie";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom'
import { useState } from "react";
import ReactPlayer from "react-player";




const MovieDetail = ({ selectedtMovieId }) => {
    const { id } = useParams();
    const apiKey = "api_key=3cab2543ba1aed5ce5d6eb68193ecd8a"
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?${apiKey}&append_to_response=videos`
    const API_IMG = "https://image.tmdb.org/t/p/w500"

    const API_SIMILAR = `https://api.themoviedb.org/3/movie/${id}/similar?${apiKey}`
    const { data: detail, isPending, error } = useFetch(API_URL);
    const { data: similar, isPending2, error2 } = useFetch(API_SIMILAR);
    const [playTrailer, setPlayTrailer] = useState(0);
    const [videoData, setVideoData] = useState([]);



    const gotVideo = (data) => {
        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                (vid) => vid.name === "Official Trailer"
            );
            setVideoData(trailer ? trailer : data.videos.results[0]);
        }
    };
    const RenderTrailer = () => {
        return (
                <div>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${detail.videos.results[0].key}}-U`}
                    playing={true}
                    width="100%"
                    height="100%"
                    controls={true}
                    className="youtube-container"
                />
            </div>
            
        );
    };


    return (
        <div className="detail">
            {detail && <div className="movie-detail" style={{ backgroundImage: `url("${API_IMG + detail.backdrop_path}")` }}>
                <section className="sectionone">
                    <div className="sideone trailerContainer">
                        <h1>{detail.title}</h1>
                        <p>{detail.overview}</p>

                        <p><b>Rating : </b> {detail.vote_average}/10</p>
                        <p><b>Release Date : </b>{detail.release_date}</p>
                        <p><b>Genres : </b>{detail.genres.map((genre) =>
                            <span key={genre.id}>{genre.name}, </span>
                        )}</p>
                        <div>
                                <button
                                    disabled={!detail.videos.results[0]}
                                    className="trailer-bttn "
                                    onClick={() => setPlayTrailer(true)}
                                >
                                    <i className="fa-solid fa-play"></i>
                                    {" Watch Trailer"}
                                </button>
                            </div>
                       
                        {
                            playTrailer
                                ? RenderTrailer()
                                : null /*Rendering the trailer*/
                        }
                        <div className={playTrailer ? "DisplayOn" : "DisplayOFF"}>
                            <button
                                className="close-bttn"
                                onClick={() => setPlayTrailer(false)}
                            >
                                Close Trailer
                            </button>
                        </div>

                    </div>

                    <div className="sidetwo">
                        <img src={API_IMG + detail.poster_path} alt="poster_path" />
                    </div>
                </section>
            </div>
            }
            <div className="movie-list">
                <h1>Related Movies</h1>
                {similar && (
                    <div className="movie-list-body">
                        {similar.results.map((movie) =>
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
        </div>
    );
}

export default MovieDetail;