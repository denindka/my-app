import React, { Component } from 'react';
import Header from './components/header';
import HomeContent from './components/homeContent';
import Footer from './components/footer';
import './css/app.css';
class Home extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <HomeContent/>
        <Footer/>
      </div>

    );
  }
}

export default Home;
