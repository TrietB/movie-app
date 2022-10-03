import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResultMovies } from '../../apiData/apiService'
import MovieItem from '../../components/MoviesCategories/MovieItem'

function MovieResult() {
    const [movies, getMovies] = useState('')
    let param = useParams()

    console.log(param.keyword)
    const getResultMovieAPI = async (query)=>{
        const response = await getResultMovies(query)
        getMovies(response.results)
    }
    useEffect(() => {
      getResultMovieAPI(param.keyword)
      // eslint-disable-next-line
    }, [])
    
  return movies && (
    <Grid container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>
            {movies.map((movie, index) => {
              if (movie.poster_path !== null) {
                return (
                    <Grid item key={index} xs={2.2}>
                    <MovieItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    poster={movie.poster_path}
                    rate={movie.vote_average}
                    count={movie.vote_count}
                    type="poster"
                    />
                    </Grid>
                );
              } return null
            })}
          </Grid>
  )
}

export default MovieResult