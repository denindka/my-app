import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Header from './components/header';
import Footer from './components/footer';
import { Link } from 'react-router';

class Description extends Component {
  constructor() {
    super();
    this.changeLanguageRu = this.changeLanguageRu.bind(this);
    this.changeLanguageEng = this.changeLanguageEng.bind(this);
    this.state = {};
    this.language = 'en-US';
  }

  componentWillMount () {
    this.getDetails();
    this.getVideo();
  }

  changeLanguageRu () {
    this.language = 'ru-RU';
    this.getDetails();
    this.getVideo();
  }

  changeLanguageEng () {
    this.language = 'en-US';
    this.getDetails();
    this.getVideo();
  }

  getDetails () {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.params.id}?api_key=1bde632a884108faee93a97f2959bbde&language=${this.language}`)
      .then(
          (response) => {
            if (response.status !== 200) {
              return;
            }
            response.json().then((data) => {
              this.setState({ overview: data.overview,
                title: data.title,
                vote_average: data.vote_average,
                genres: data.genres,
                budget: data.budget,
                production_countries: data.production_countries[0].name,
                production_companies: data.production_companies[0].name,
                homepage: data.homepage,
                release_date: data.release_date
              });
            });
          }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }

  getVideo  () {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.params.id}/videos?api_key=1bde632a884108faee93a97f2959bbde&language=${this.language}`)
      .then(
          (response) => {
            if (response.status !== 200) {
              return;
            }
            response.json().then((data) => {
              this.setState({ id: data.results[0].key });

            });
          }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {

    if(this.state.genres) {
      var newGenres  = this.state.genres.map((item, index) => <span key={index}><Link to={`/genre/${item.id}-${item.name.toLowerCase()}`}>{item.name}</Link></span>);
    }


    return (
      <div className="container">
        <Header/>
        <div className="contain">
          <div className="button-language">
            <button onClick={this.changeLanguageRu}>Ru</button>
            <button onClick={this.changeLanguageEng}>En</button>
          </div>
          <h1 className="title">{this.state.title}</h1>
          <h4 className="description-movie">{this.state.overview}</h4>
          <div className="trailer">
            <YouTube
            videoId={this.state.id}
            onReady={this._onReady}/>
          </div>
          <div className="details">
            <div className="genres">
              {newGenres}
            </div>
            <div className="details-movie">
              <span>Budget: ${this.state.budget}. </span>
              <span>Countrie: {this.state.production_countries}.</span>
              <span>Company: {this.state.production_companies}</span>
              <span>Release: {this.state.release_date}</span>
              <span>Vote Average: <i className="fa fa-star"></i>{this.state.vote_average} </span>
            </div>
            <div className="homepage">
              <span><a href={this.state.homepage}>Homepage</a></span>
            </div>
          </div>

        </div>
        <Footer/>
      </div>

    );
  }
}

export default Description;
