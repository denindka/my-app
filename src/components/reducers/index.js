import { combineReducers } from 'redux';
import rated from './rated';
import popular from './mostPopularReduce';
import nowPlaying from './nowPlayingReducers';
import upcaming from './upcamingReducers';
import video from './getVideo';
export default combineReducers({
  rated, popular, nowPlaying, upcaming, video
});
