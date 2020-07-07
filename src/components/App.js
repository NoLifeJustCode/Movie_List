import React from 'react';
import '../index.css';
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import {data} from '../data'
import {add_movies, setShowFavs} from '../actions'
class App extends React.Component{
  componentDidMount(){
    const {store}=this.props
    store.subscribe(()=>{
      console.log('update successfull')
      this.forceUpdate();
    })
    store.dispatch(add_movies(data))
  }
  isMovieFav=(movie)=>{
    const {favourites}=this.props.store.getState().movies
    var index=favourites.indexOf(movie)
    return index!==-1
  }
  showFavs=(val)=>{
    this.props.store.dispatch(setShowFavs(val))
  }
  render(){
    console.log('store',this.props.store.getState())
    const {movies}=this.props.store.getState()
    const {list,favourites,showfavs}=movies
    const movieList=showfavs?favourites:list
  return (
    <div className="App">
    <Navbar/>
    <div className="tabs">
      <div className={`tab ${showfavs?'':'active-tabs'}`} onClick={()=>this.showFavs(false)}>Movies</div>
      <div className={`tab ${showfavs?'active-tabs':''}`} onClick={()=>this.showFavs(true)}>Favourites</div>
    </div>
    <div className="list">
      {movieList.map((item,index)=>{
        return(<MovieCard movie={item} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFav(item)}/>)
      })}
    </div>
    {
      movieList.length==0&&<div>No movies to show</div>
    }
    </div>
   )
  }

}

export default App;
