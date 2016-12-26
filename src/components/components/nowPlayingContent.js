import React, { Component } from 'react';
import '../css/global.css';
import '../css/contain/contain.css';
import { connect } from 'react-redux';
import { getNowPlaying, getNowPlayingDown } from '../action/nowPlaying';
import { Link } from 'react-router';

class Contain extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount(){
    this.props.onGetRated();
  }

  nextPage() {
    this.props.nowPlaying.splice(0, 1);
    this.props.onGetRated();
  }

  prevPage() {
    this.props.nowPlaying.splice(0, 1);
    this.props.onGetRatedDown();
  }

  render() {
    if(this.props.nowPlaying.length !== 0) {
      var data = this.props.nowPlaying.map((item) => item.results);
      var newData = data[0].map((item, index) => {
        return (
                <div className="poster" key={index}>
                  <Link to={`/movie/${item.id}`}>
                    <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+item.poster_path} alt="img"/>
                    <h4>{item.original_title}</h4>
                  </Link>
                </div>
        );
      });
    }
    return (
      <div className="container">
          <div className="contain">
              {newData}
          </div>
          <div className="buttons">
              <button className="left" onClick={this.prevPage}>Prev</button>
              <button className="right" onClick={this.nextPage}>Next</button>
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    nowPlaying: state.nowPlaying
  }),
  dispatch => ({
    onGetRated: () => {
      dispatch(getNowPlaying());
    },
    onGetRatedDown: () => {
      dispatch(getNowPlayingDown());
    },
  })
)(Contain);
