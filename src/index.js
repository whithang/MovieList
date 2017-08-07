var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

console.log('hello world');

import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';

ReactDOM.render(<div>*******testing</div>, document.getElementById('app'));
// ReactDOM.render(
//   <MovieList movies={movies}/>, document.getElementById('app')
// );
