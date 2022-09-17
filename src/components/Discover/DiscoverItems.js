import React from 'react'
import { useState, useCallback, useEffect } from 'react';
import { getDetailMovie } from '../../apiData/apiService';
import { Link } from 'react-router-dom';
import '../../styles/discoverItem.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DiscoverItem(props) {
    const { id } = props;
    const [data, setData] = useState({
      id: 0,
      backdrop_path: '',
      title: '',
      release_date: '',
      vote_average: 0,
      vote_count: 0,
      runtime: 0,
      genres: [],
    });
  
    const getDiscoverMovieAPI = useCallback(async (idm) => {
      const response = await getDetailMovie(idm);
      setData(response);
    }, []);
  
    useEffect(() => {
      getDiscoverMovieAPI(id);
    }, []);
  
    const rootImg = process.env.REACT_APP_PUBLIC_IMG;
    const year = new Date(data.release_date).getFullYear();
    const categories = data.genres.map((genre) => genre.name).splice(0, 2).join(' | ');
  
    return !data.id ? (
      <div />
    ) : (
      <div className="movie-item">
        <Link className='wrapper' to={`/movie/${id}`}>
            <div className="movie-poster mb-3">
              <img src={`${rootImg}/w400/${data.backdrop_path}`} alt={`backdrop ${data.title}`} />
            </div>
            <div className="movie-info">
              <div>
                <h5 className="movie-title">{data.title}</h5>
                <p className="movie-date">{`${year} • ${categories}`}</p>
                <div className="movie-detail">
                  <FontAwesomeIcon icon={faStar} className="fa-icon"/>
                  <span className="movie-rating">{`${data.vote_average} (${data.vote_count.toLocaleString()})`}</span>
                </div>
              </div>
              <span className="movie-length">{`${data.runtime} Min`}</span>
            </div>
        </Link>
      </div>
    );
  }