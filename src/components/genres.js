import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { Link } from 'react-router';
import './css/app.css';
class Genres extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount () {
    this.getGenres();

  }

  getGenres () {
    fetch(`https://api.themoviedb.org/3/genre/${this.props.params.id}/movies?api_key=1bde632a884108faee93a97f2959bbde&language=en-US&include_adult=false`)
      .then(
          (response) => {
            if (response.status !== 200) {
              return;
            }
            response.json().then((data) => {
              this.setState({results: data.results});
            });
          }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }
  render() {
    if(this.state.results) {
      var newData =  this.state.results.map((item, index)=> {
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

export default Genres;
