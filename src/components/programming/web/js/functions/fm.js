import React from 'react';

class FM extends React.Component {
  render () {
    return (
      <div>
      <h2>Functions Verses Methods</h2>
        <li>Methods are functions that belong to Objects</li>
        <li>Notation is different in envoking</li>
        <table>
          <tr><th>Type</th><th>Syntax</th></tr>
          <tr><td>Function Invoking</td><td>functionName(Argument);</td></tr>
          <tr><td>Method Invoking</td><td>objectName.methodName(Argument);</td></tr>
        </table>
      </div>
    );
  }
}

export default FM;
