import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
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
    }, [param.keyword])
    
  return movies && (
    <Container sx={{mt:10}}>
      <Typography variant='h3' sx={{mb: 5}}>Results for {param.keyword}:</Typography>
    <Grid container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>
            {movies.map((movie, index) => {
              if (movie.poster_path !== null) {
                return (
                  <Grid item key={index} lg={2.2} sm={5} md={3}>
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
    </Container>
  )
}

export default MovieResult