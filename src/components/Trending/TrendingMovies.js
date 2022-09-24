import { Box, Grid, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTrendingMovies } from '../../apiData/apiService'
import '../../styles/trending.css'
import MovieItem from '../MoviesCategories/MovieItem'

function TrendingMovies() {
  const [active , setActive] = useState('week')
  const [movies , setMovies] = useState([])

  const getTrendingMoviesAPI = useCallback(async (param) =>{
    const response = await getTrendingMovies(param)
    setMovies(response.results)
  }, [])

  useEffect(()=>{
    getTrendingMoviesAPI(active)
  },[active])

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%'}} className="mb-3 d-flex justify-content-between align-items-center">
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <Typography variant='h3' mt={3} mb={3}>Trending Movies</Typography>
        <div className='button-wrapper'>
          <button 
          type='button' 
          className= {`btn ${active === 'week' ? 'btn-active': ''}`}
          onClick={()=> setActive('week')}>This week</button>
          <button type='button' 
          className={`btn ${active === 'day' ? 'btn-active': ''}`} 
          onClick={()=> setActive('day')}>Today</button>
        </div>
        </Box>
        <Link to={`/movies/trending?q=${active}&page=1`}>
          View All
        </Link>
    </Box>
    <Grid container className="category-wrapper">
        {movies.map((movie, index) => {
          return (
            <Grid item key={index} xs={2.2} >
            <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            backdrop={movie.poster_path}
            release_date={movie.release_date}
            poster={movie.poster_path}
            rate={movie.vote_average}
            count={movie.vote_count}
            />
            </Grid>
            )
          }
        )}
      </Grid>
    </>
  )
}

export default TrendingMovies