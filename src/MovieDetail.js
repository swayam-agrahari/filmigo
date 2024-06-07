import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/MovieDetail.css';

const   MovieDetail = ({ moviesData }) => {
    const { title } = useParams();
    const navigate = useNavigate();
    const movie = Object.values(moviesData).flat().find(movie => movie.title === title);

    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="movieDetails">
            <div className="poster_grid1">
                <img src={movie.imgPoster} alt={movie.title} height="200px" />
            </div>
            <div className="grid2">
                <div className="descp">
                    <h2><b>{movie.title}</b></h2>
                    <button onClick={() => navigate('/booking')}>+ Book This Show</button>
                </div>
                <div className="details">
                    <p id="g1">{movie.genres[0]}</p>
                    <p id="g2">{movie.genres[1]}</p>
                    <i className="fa-regular fa-calendar-days"></i>
                    <p>{movie.yearOfRelease}</p>
                    <i className="fa-regular fa-clock"></i>
                    <p>{movie.duration}</p>
                    <i className="fa-solid fa-star"></i>
                    <p>{movie.rating}</p>
                </div>
                <div className="summary">{movie.summary}</div>
                <div className="details2">
                    <p>Country: {movie.country}</p>
                    <p>Genre: {movie.genres.join(', ')}</p>
                    <p>Date Release: November 5, {movie.yearOfRelease}</p>
                    <p>Production: {movie.production}</p>
                    <p>Cast: {movie.cast}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
