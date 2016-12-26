import React, { Component } from 'react';
import '../css/header.css';
import '../css/global.css';
import logo from '../img/logo.png';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Header extends Component {
  constructor() {
    super()
    this.searchValue = 'ss';
  }
  search (event) {
    this.searchValue = this.searchInput.value;
    browserHistory.push('/search/'+this.searchValue+'');
    this.searchInput.value = '';
  }
  render() {
    console.log(this.searchValue);
    return (
      <header className="clearfix">
        <div className="header-content">
          <div className="logo">
            <Link to="/"><img src={logo} alt="cinema" /></Link>
          </div>
          <nav className="menu">
            <ul>
              <li><Link to="/rated">Rated</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/now_playing">Now Playing</Link></li>
              <li><Link to="/upcaming">Upcoming</Link></li>
            </ul>
          </nav>
          <div className="search">
            <button onClick={this.search.bind(this)}>Search</button>
            <input type="text" placeholder="search"  ref={(input) => this.searchInput = input} />
          </div>
        </div>
      </header>
    );
  }
}

export default connect(
  state => ({
    search: state.search
  }),
  dispatch => ({

  })
)(Header);
