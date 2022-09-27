import { Button, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getCategories, getCategoryMovies } from '../../apiData/apiService';
import MovieItem from '../../components/MoviesCategories/MovieItem';

function CategoryViewAll() {
    
    const [active , setActive] = useState('action')
    const [categories, setCategories] =  useState([])
    const [pageActive, setPageActive] = useState(1);
    const [id, setId] = useState(28);
    const [movies, setMovies] = useState([]);

    let location = useLocation()
    console.log(location)

    const handleChange = () => {
        setPageActive(pageActive + 1)
    }


    const getCategoriesAPI = async ()=>{
        const response = await getCategories()
        const genres = response.genres.filter((genre) => genre.name !== 'Documentary' && genre.name !== 'Romance' && genre.name !== 'Drama')
        setCategories(genres)
    }

    const getCategoriesMoviesAPI =async (idc)=>{
        const response = await getCategoryMovies(idc)
        setMovies(response.results);
    }

    useEffect(() => {
        getCategoriesAPI()
    }, [])

    useEffect(() => {
        getCategoriesMoviesAPI(id)
    },[id])


  return (
    <>
    <div className="section-category container-xxxl my-5" style={{ minHeight: '100vh' }}>
        <div className="my-5">
          <h3 className="fw-bold">Browse by category</h3>
          <div className="button-wrapper mb-4">
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
          <div className="row row-cols-auto">
            {movies.map((movie) => {
              if (movie.poster_path !== null) {
                return (
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
                );
              }
            })}
          </div>
        </div>
    </div>
    <Pagination count={10} size='large' page={pageActive} onChange={handleChange} />
    </>
  )
}

export default CategoryViewAll