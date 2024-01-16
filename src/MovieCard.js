/* We can also import Component like
import {Component} from "react";

class MovieCard extends Component {}
*/

function MovieCard(props){
        
        // const {movies : data} = this.props;
        // const {title, plot, price, rating, stars, fav, inCart} = data;
    const {movie, increaseStars, decreaseStars, addToCart, toggleFav} = props;
    const {title, plot, poster, price, rating, stars, fav, isInCart} = props.movie;
    

    return(
        <div className="main">

            {/**Movie Card */}
            <div className="movie-card">

                {/**Left section of Movie Card */}
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                
                {/**Right section Movie Card */}
                <div className="right">

                    {/**Title, plot, price of the movie */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>

                    {/**Footer starts here with ratings, stars and buttons */}
                    <div className="footer">
                        <div className="rating">{rating}</div>

                        {/**Star image with increase and decrease buttons and star count */}
                        <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={() => decreaseStars(movie)} 
                            />
                            <img className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                            />
                            <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" onClick={() => increaseStars(movie)} 
                            />
                            <span className="starCount">{stars}</span>
                        </div>

                        {/**Favourite and add to cart buttons */}
                        {fav? <button className="unfavourite-btn" onClick={() => toggleFav(movie)}>Un-Favourite</button> : <button className="favourite-btn" onClick={() => toggleFav(movie)}>Favourite</button> }

                        <button className={isInCart? "unfavourite-btn" : "cart-btn"} onClick={() => addToCart(movie)}>{isInCart? "Remove from Cart":"Add to Cart"}</button>
                        
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default MovieCard;