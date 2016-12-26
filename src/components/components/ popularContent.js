import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopular, getPopularDown } from '../action/mostPopular';
import { Link } from 'react-router';

class PopularContent extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }


  componentDidMount(){
    this.props.onGetPopular();
  }

  nextPage() {
    this.props.popular.splice(0, 1);
    this.props.onGetPopular();
  }

  prevPage() {
    this.props.popular.splice(0, 1);
    this.props.onGetPopularDown();
  }

  render() {
    if(this.props.popular.length !== 0) {
      var data = this.props.popular.map((item) => item.results);
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
    popular: state.popular
  }),
  dispatch => ({
    onGetPopular: () => {
      dispatch(getPopular());
    },
    onGetPopularDown: () => {
      dispatch(getPopularDown());
    }
  })
)(PopularContent);
