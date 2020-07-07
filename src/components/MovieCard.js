import React from 'react'
import {add_favourites,remove_favourites} from '../actions'
class MovieCard extends React.Component {


  addToFavourite=()=>{
    const {movie}=this.props
    this.props.dispatch(add_favourites(movie))

  }
  RemoveFavourite=()=>{
    const {movie}=this.props
    this.props.dispatch(remove_favourites(movie))
  }
  render(){
      console.log(this.props)
  const {movie,isFavourite}=this.props
    return (
        
      <div className="movie-card">
      <div className="left">
        <img alt ='Movie poster' src={movie.Poster}/>
        
      </div>
      <div className="right">
            <div className="title" >
                {movie.Title}
            </div>
            <div className="plot" >
                {movie.Plot}
            </div>
            <div className="footer">
            <div className="rating" >
                {movie.imdbRating}
            </div>
            {
              isFavourite?
              <button className="unfavourite-btn" onClick={this.RemoveFavourite}> unFavourite</button>:
              <button className="favourite-btn" onClick={this.addToFavourite}> Favourite</button>
            }
               
            </div>

      </div>
      </div>
     )
    }
  }
  export default MovieCard;