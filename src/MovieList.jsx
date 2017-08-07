import React from 'react';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = { owner: 'Kelly'};
  }

  render() {
    return (
      <div>
        <h1>My Movie List</h1>
        <ul>
          <li>{this.state.owner}</li>
        </ul>
      </div>
    );
  }
}

export default MovieList;
