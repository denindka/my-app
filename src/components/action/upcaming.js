let i = 0;
export const getUpcaming = () => {

  i++;
  let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=1bde632a884108faee93a97f2959bbde&language=en-US&page='+i+'';
  return dispatch => {

    fetch(url)
    .then(
        function(response) {
          if (response.status !== 200) {
            return;
          }

          response.json().then(function(data) {
            dispatch({type: 'get_upcaming', payload: data});
          });
        }
    )
  .catch(function(err) {
      console.log('Fetch Error :-S', err);
  });
  };
};

export const getDownCaming = () => {
  i  > 1 ? i-- : i = 1;
  let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=1bde632a884108faee93a97f2959bbde&language=en-US&page='+i+'';
  return dispatch => {
    fetch(url)
    .then(
        function(response) {
          if (response.status !== 200) {
            return;
          }

          response.json().then(function(data) {
            dispatch({type: 'get_upcaming', payload: data});
          });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
  };
};
