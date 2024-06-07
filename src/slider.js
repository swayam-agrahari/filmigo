import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Slider.css';

const MovieSlider = ({ title, movies }) => {
    return (
        <div className="movie-slider">
            <h2 className="slider-title">{title}</h2>
            <div className="slider-container">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <Link to={`/movie/${movie.title}`}>
                            <img src={movie.imgPoster} alt={movie.title} className="movie-poster" />
                            <div className="movie-title">{movie.title}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSlider;
