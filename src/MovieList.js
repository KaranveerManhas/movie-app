import React from "react";
import MovieCard from './MovieCard';

function MovieList(props){
    
    const {movies, increaseStars, decreaseStars, toggleFav, addToCart} = props;

    return(
        <div className="main">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie = {movie} increaseStars={increaseStars} decreaseStars={decreaseStars} toggleFav={toggleFav} addToCart={addToCart} />
            ))}
        </div>
    )
    
}

export default MovieList;