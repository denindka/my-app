import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Contain from './components/Rated';
import './css/app.css';
class MostRated extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <Contain/>
        <Footer/>
      </div>

    );
  }
}

export default MostRated;
