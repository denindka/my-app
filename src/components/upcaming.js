import React, { Component } from 'react';
import Header from './components/header';
import UpcamingContent from './components/upcamingContent';
import Footer from './components/footer';
import './css/app.css';
class Upcaming extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <UpcamingContent/>
        <Footer/>
      </div>

    );
  }
}

export default Upcaming;
