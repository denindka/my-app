import React, { Component } from 'react';
import Header from './components/header';
import { Link } from 'react-router';
import Footer from './components/footer';
import './css/app.css';
class Search extends Component {
  constructor() {
    super()
    this.state = {};
  }

  componentWillMount () {
    this.getSearch();

  }

  getSearch () {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1bde632a884108faee93a97f2959bbde&language=en-US&query=${this.props.params.id}&page=1&include_adult=false`)
      .then(
          (response) => {
            if (response.status !== 200) {
              return;
            }
            response.json().then((data) => {
              this.setState({data: data.results})
            });
          }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    if(this.state.data) {
      var newData = this.state.data.map((item, index) => {
        return (
            <div key={index} className="genre">
              <div className="genre-description">
              <h2><Link to={`/movie/${item.id}`}>{item.title}</Link></h2>
                <span>{item.overview}</span>
              </div>
              <div className="genre-img">
                  <Link to={`/movie/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`} alt="img"/>
                  </Link>
              </div>
            </div>
        );
      });
    }

    return (
      <div className="container">
        <Header/>
        <div className="contain">
        {newData}
        </div>
        <Footer/>
      </div>

    );
  }
}

export default Search;
