import {  Grid, Pagination, PaginationItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCategories, getCategoryMovies } from '../../apiData/apiService';
import MovieItem from '../../components/MoviesCategories/MovieItem';
import '../../styles/category.css'

function CategoryViewAll() {
    
    const [active , setActive] = useState('action')
    const [categories, setCategories] =  useState([])
    const [pageActive, setPageActive] = useState(1);
    const [id, setId] = useState(28);
    const [movies, setMovies] = useState([]);

    

    const getCategoriesAPI = async ()=>{
        const response = await getCategories()
        const genres = response.genres.filter((genre) => genre.name !== 'Documentary' && genre.name !== 'Romance' && genre.name !== 'Drama')
        setCategories(genres)
    }

    const getCategoriesMoviesAPI =async (idc, page)=>{
        const response = await getCategoryMovies(idc, page)
        setMovies(response.results);
    }

    useEffect(() => {
        getCategoriesAPI()
    }, [])

    useEffect(() => {
        getCategoriesMoviesAPI(id, pageActive)
    },[id, pageActive])


  return (
    <>
    <div className="section-category" style={{ minHeight: '100vh' }}>
        <div className="">
        <Typography variant='h3' mt={3} mb={3}>Browse by category</Typography>
          <div className="category-btns">
            {categories.map((cat) => (
            <Link style={{ textDecoration: 'none' }}
            key={cat.id} 
            className={`category-btn ${active === cat.name ? 'btn-active' : ''}`} 
            onClick={() => {
                setActive(cat.name);
                return setId(cat.id);
              }} 
            to={`/movies/category?idc=${id}&cat=${active}&page=${pageActive}`}>
              
                {cat.name}

            </Link>
            ))}
          </div>
        </div>
        <div className="grid-wrapper">
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
            }
            )}
          </Grid>
        </div>
    </div>
    <Pagination count={200} size='large' page={pageActive} 
    sx={{display:'flex',alignItems:"center",
    justifyContent:"center"}}
    onChange={(e, value) => setPageActive(value)}
    renderItem={(item) => (
      <PaginationItem
        component={Link}
        to={`/movies/category?idc=${id}&cat=${active}&page=${pageActive? pageActive: pageActive -1}`}
        {...item}
      />
    )}
    />
    </>
  )
}

export default CategoryViewAll