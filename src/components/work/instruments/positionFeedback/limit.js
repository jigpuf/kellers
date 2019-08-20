import React from 'react';

class Limit extends React.Component {
  render () {
    return (
      <div>
      <h3>Wiring</h3>
        <li>Red-Open +</li>
        <li>Black-Open -</li>
        <li>White-Closed +</li>
        <li>Green-Closed -</li>
      <h3>Cam</h3>
        <li>Top Cam- Closed</li>
        <li>Bottom Cam- Open</li>
      <h3>Models:</h3>
      </div>
    );
  }
}

export default Limit;
