let i = 0;


export const getPopular = () => {
  i++;
  let url = 'https://api.themoviedb.org/3/movie/popular?api_key=1bde632a884108faee93a97f2959bbde&language=en-US&page='+i+'';
  return dispatch => {
    fetch(url)
    .then(
        function(response) {
          if (response.status !== 200) {
            return;
          }
          response.json().then(function(data) {
            dispatch({type: 'get_most_popular', payload: data});
          });
        }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

  };
};


export const getPopularDown = () => {
  i  > 1 ? i-- : i = 1;

  let url = 'https://api.themoviedb.org/3/movie/popular?api_key=1bde632a884108faee93a97f2959bbde&language=en-US&page='+i+'';
  return dispatch => {
    fetch(url)
      .then(
          function(response) {
            if (response.status !== 200) {
              return;
            }
            response.json().then(function(data) {
              dispatch({type: 'get_most_popular', payload: data});
            });
          }
      )
      .catch(function(err) {
          console.log('Fetch Error :-S', err);
      });
  };
};
