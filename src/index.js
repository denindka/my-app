import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory} from 'react-router';
import reducer from './components/reducers';
import Rated from './components/MostRated';
import Popular from './components/Popular';
import nowPlaying from './components/nowPlaying';
import Upcaming from './components/upcaming';
import Home from './components/homepage';
import Description from './components/description';
import Genres from './components/genres';
import Search from './components/search';

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/rated" component={Rated}/>
        <Route path="/movie/:id" component={Description}/>
        <Route path="/genre/:id" component={Genres}/>
        <Route path="/search/:id" component={Search}/>
        <Router path="/popular" component={Popular} />
        <Router path="/now_playing" component={nowPlaying} />
        <Router path="/upcaming" component={Upcaming} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
