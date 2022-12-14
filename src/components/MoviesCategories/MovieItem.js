import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/category.css'

function MovieItem(props) {
    const 
    { id, title, rate, count,  genres = [], poster, release_date } = props;
      const rootImg = process.env.REACT_APP_PUBLIC_IMG;
      const year = new Date(release_date);
    // eslint-disable-next-line
      let categories = ''
      if (genres.length > 0) {
        // eslint-disable-next-line
        categories = genres.map((genre) => genre.name).splice(0, 2).join(' | ');
      }
    
        return (
          <div className="movie-item">
            <Link to={`/movie/${id}`} className="wrapper">
             
                {/* // eslint-disable-next-line */}
                <div className="movie-poster ">
                  <img src={`${rootImg}/w200${poster}`} alt={`backdrop ${title}`} />
                </div>
                <div className="movie-info">
                  <div>
                    <h6 className="movie-title">{title}</h6>
                    <p className="movie-date">{`${year.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}`}</p>
                    <div >
                    <FontAwesomeIcon icon={faStar} className="fa-icon"/>
                      <span className="release-date">{`${rate} (${count?.toLocaleString()})`}</span>
                    </div>
                  </div>
                </div>
              
            </Link>
          </div>
        );
    }
export default MovieItem