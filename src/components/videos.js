import React from 'react';

class Videos extends React.Component {
  render () {
    return (
      <div>
      <h3>Movie Trailers</h3>
        <a href="https://www.youtube.com/watch?v=0qlxTw--4qw">Hidden</a>
      <h3>Favorite Music</h3>
        <a href="https://www.youtube.com/watch?v=1cujypawzVQ">Poe: Hello</a>
      <h3>Programming</h3>
        <ul>
          <li>HTML:</li>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=qseNjA-73Fw&list=PL081AC329706B2953&index=2">Templates</a></li>
            </ul>
          <li>CSS:</li>
          <li>Javascript/ES6:</li>
          <li>React:</li>
        </ul>
      <h3>Church</h3>
        <ul>
          <li>apologetics:</li>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=RzSOdBmrIhY">Eye Witnesses and ancient Parrallels</a></li>
            </ul>
          <li>Pre-mortal Existance:</li>
        </ul>
      <h3>How To</h3>
      <h3>Funny</h3>
      <h3>Other Favorites</h3>
      </div>
    );
  }
}

export default Videos;
