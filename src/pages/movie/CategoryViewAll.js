import { Button, Grid, Pagination, PaginationItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getCategories, getCategoryMovies } from '../../apiData/apiService';
import MovieItem from '../../components/MoviesCategories/MovieItem';

function CategoryViewAll() {
    
    const [active , setActive] = useState('action')
    const [categories, setCategories] =  useState([])
    const [pageActive, setPageActive] = useState(1);
    const [id, setId] = useState(28);
    const [movies, setMovies] = useState([]);

    let location = useLocation()
    let query = new URLSearchParams(location.search)

    console.log(location)

    

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
          <h3 className="">Browse by category</h3>
          <div className="button-wrapper">
            {categories.map((cat) => (
            <Link 
            key={cat.id} 
            className={`btn ${active === cat.name ? 'btn-active' : ''}`} 
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
        <div className="grid-wrapper flex-row flex-wrap mb-5">
          <Grid container className="row row-cols-auto">
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
              }
            })}
          </Grid>
        </div>
    </div>
    <Pagination count={10} size='large' page={pageActive}
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