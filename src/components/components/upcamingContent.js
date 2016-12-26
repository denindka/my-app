import React, { Component } from 'react';
import '../css/global.css';
import '../css/contain/contain.css';
import { connect } from 'react-redux';
import { getUpcaming, getDownCaming } from '../action/upcaming';
import { Link } from 'react-router';

class UpcamingContent extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount(){
    this.props.onGetRated();
  }

  nextPage() {
    this.props.upcaming.splice(0, 1);
    this.props.onGetRated();
  }

  prevPage() {
    this.props.upcaming.splice(0, 1);
    this.props.onGetPrev();
  }

  render() {
    if(this.props.upcaming.length !== 0) {
      var data = this.props.upcaming.map((item) => item.results);

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
)(UpcamingContent);
