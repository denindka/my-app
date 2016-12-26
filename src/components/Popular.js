import React, { Component } from 'react';
import Header from './components/header';
import PopularContent from './components/ popularContent';
import Footer from './components/footer';
import './css/app.css';
class Popular extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <PopularContent/>
        <Footer/>
      </div>

    );
  }
}

export default Popular;
