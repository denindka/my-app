import React, { Component } from 'react';
import Header from './components/header';
import NowPlayingContent from './components/nowPlayingContent';
import Footer from './components/footer';
import './css/app.css';
class NowPlaying extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <NowPlayingContent/>
        <Footer/>
      </div>

    );
  }
}

export default NowPlaying;
