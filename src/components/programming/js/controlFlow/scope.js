import React from 'react';

class Scope extends React.Component {
  render () {
    return (
      <div>
        <h2>Scope</h2>
        Variables and Block Scope:<br />
        <ol>
          <li>Variables are global within code block they are found</li>
          <li>If outside of code blocks, they are variable</li>
          <li>If global variable is changed inside of code block, it is changed globally</li>
          <li>If a variable is redefined in a code block, it creates a local scope for a global variable</li>
          <li>Scope in a nested block will only go up in levels until it finds its variable</li>
          <li>Var makes things global</li>
        </ol>
      </div>
    );
  }
}

export default Scope;
