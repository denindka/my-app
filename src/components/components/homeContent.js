import React, { Component } from 'react';
import '../css/global.css';
import '../css/contain/contain.css';
import { connect } from 'react-redux';
import { getUpcaming, getDownCaming } from '../action/upcaming';
import { Link } from 'react-router';

class HomeContent extends Component {
  componentDidMount(){
    this.props.onGetRated();
  }

  render() {
    if(this.props.upcaming.length !== 0) {
      var data = this.props.upcaming.map((item) => item.results);
      var newData = data[0].map((item, index) => {
        if (index <= 6) {
          return (
              <div className="home-poster" key={index}>
                <Link to={`/movie/${item.id}`}>
                  <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+item.poster_path} alt="img"/>
                </Link>
                  <div className="description">
                      <h3>{item.original_title}</h3>
                      <span className="text-description">{item.overview}</span>
                      <h4><span>{item.release_date}, </span>
                          <span>{item.original_language}, </span>
                          <span><i className="fa fa-star"></i>{item.vote_average}</span>
                      </h4>

                      <div className="button-more">
                        <Link to={`/movie/${item.id}`}><button>More Info...</button></Link>
                        </div>
                  </div>
              </div>
          );
        }
      });
    }

    return (
      <div className="container">
          <div className="title-contain">
              <h1>Premiere</h1>
              <h3>New movies and blockbusters</h3>
          </div>
          <div className="contain">
              {newData}
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    upcaming: state.upcaming
  }),
  dispatch => ({
    onGetRated: () => {
      dispatch(getUpcaming());
    },
    onGetPrev: () => {
      dispatch(getDownCaming());
    }
  })
)(HomeContent);
