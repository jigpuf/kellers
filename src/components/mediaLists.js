import React from 'react';

class MediaLists extends React.Component {
  render () {
    return (
      <div>
        <div id="mediaTier1">
          <button class="tier1">Music</button>
          <button class="tier1">Movies</button>
          <button class="tier1">Books</button>
          <button class="tier1">TV Shows</button>
          <button class="tier1">Games</button>
          <hr />
        </div>
        <div id="mediaTier2"></div>
        <div id="mediaTier3"></div>
      </div>
    )
  }
}
export default MediaLists;
