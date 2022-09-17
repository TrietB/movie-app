import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCategories, getCategoryMovies } from '../../apiData/apiService';
import MovieItem from './MovieItem';
import '../../styles/category.css'
import { Box, Grid, Typography } from '@mui/material';

function CategoryMovies() {
  const [active, setActive] = useState('action')
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(28);
  const [movies, setMovies] = useState([]);

 const getCategoriesAPI = useCallback( async ()=>{
  const response = await getCategories()
  const genres = response.genres.filter((genre) => genre.name !== 'Documentary' && genre.name !== 'Romance' && genre.name !== 'Drama')
  setCategories(genres)
 })

 const getCategoriesMoviesAPI = useCallback(async (idc)=>{
  const response = await getCategoryMovies(idc)
  console.log(response.results)
  setMovies(response.results);
 })

 useEffect(() => {
    getCategoriesAPI()
 }, [])

 useEffect(() => {
    getCategoriesMoviesAPI(id)
 },[id])
 


  return (
    <div className="section-category">
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%'}} className="mb-3 d-flex justify-content-between align-items-center">
        <Typography variant='h3' mt={3} mb={3}>Browse by category</Typography>
        <Link to={`/movies/category?idc=${id}&cat=${active}&page=1`}>
          View All
        </Link>
      </Box>
      <div className="button-wrapper mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`btn ${active === category.name ? 'btn-active' : ''}`}
            onClick={() => {
              setActive(category.name);
              return setId(category.id);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <Grid container className="category-wrapper scroll-wrapper pb-5">
        {movies.map((movie, index) => {
          return (
            <Grid item key={index} xs={3} >
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
    </div>
  );
}

export default CategoryMovies