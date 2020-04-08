import React from 'react';

class Variables extends React.Component {
  render () {
    return (
      <div>
        <h2>Javascript Variables</h2>
          <p>If you want to be able to change a variable use let. If it should
          stay the same use const.</p>
          Variable Naming Conventions:
          <ol>
            <li>No spaces</li>
            <li>Only contain letters, #, underscore, or $</li>
            <li>Cannot start with number</li>
            <li>Cannot use Javascript key words</li>
          </ol>
          <table>
            <tr><th>Type</th><th>Example</th></tr>
            <tr><td>Changeable</td><td>let variableNameHere = valueHere;</td></tr>
            <tr><td>Not changeable after assignment</td><td>const variableNameHere = valueHere;</td></tr>
            <tr><td>Global</td><td>var variableNameHere = valueHere;</td></tr>
          </table>

      </div>
    );
  }
}

export default Variables;
