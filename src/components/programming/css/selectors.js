import React from 'react';

class Selectors extends React.Component {
  render () {
    return (
      <div>
        <h2>Selectors</h2>
          <ol>
            <li>Select by Id</li>
            <li>Select By class</li>
            <li>Select by tag</li>
          </ol>
        <h3>Select by Id</h3>
          &#35;scripture &#123;<br />
          color:rgb(0,232,15)<br />
          &#125;<br />
          <hr />
        <h3>Select by Class</h3>
          .scripture &#123;<br />
          color:rgb(0,232,15)<br />
          &#125;<br />
        <hr />
        <h3>Select by Tag</h3>
          h2 &#123;<br />
          color:rgb(0,232,15)<br />
          &#125;<br />
          <hr />

      </div>
    );
  }
}

export default Selectors;
