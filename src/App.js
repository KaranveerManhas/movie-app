import React from 'react';
import MovieList from './MovieList';
import Navbar from './Navbar';
import {movies} from './movieData';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }

  increaseStars = (movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars < 5){
      movies[movieId].stars += 0.5;
    }

    this.setState({
      movies
    })
  }

  decreaseStars = (movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0){
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies
    })
  }

  toggleFav = (movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({ movies});
  }

  addToCart = (movie) => {
    let {movies, cartCount} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    if(movies[movieId].isInCart){
      cartCount += 1;
    }
    else{
      cartCount -= 1;
    }

    this.setState({
      movies, cartCount
    });

  }

  render() {

    const {movies, cartCount} = this.state;

    return (
      <>
      <Navbar cartCount = {cartCount} />
      <MovieList movies={movies} increaseStars={this.increaseStars} decreaseStars={this.decreaseStars} addToCart={this.addToCart} toggleFav = {this.toggleFav} />
      </>
    )
  }
}

