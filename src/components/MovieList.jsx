// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class MovieList extends React.Component {
//   var movies = [
//     {title: 'Mean Girls'},
//     {title: 'Hackers'},
//     {title: 'The Grey'},
//     {title: 'Sunshine'},
//     {title: 'Ex Machina'},
//   ];
//
//   render() {
//     return (
//       <div>
//         <h1>My Movie List</h1>
//         <ul>
//
//         </ul>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<div>****Testing</div>, document.findElementById('app'));

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);
