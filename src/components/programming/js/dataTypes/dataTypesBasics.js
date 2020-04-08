import React from 'react';

class dataTypesBasics extends React.Component {
  render () {
    return (
      <div>
        <h2>Data Types</h2>
          <table>
          <tr><th>Type</th><th>Example</th></tr>
          <tr><td>Number</td><td>1, 100, 3.14</td></tr>
          <tr><td>String</td><td>'Kman'</td></tr>
          <tr><td>Boolean</td><td>true/false</td></tr>
          <tr><td>Null</td><td>sets a variable with no value</td></tr>
          <tr><td>Undefined</td><td>the browser sets variables with no value</td></tr>
          <tr><td>Objects</td><td>complex data structures like arrays, dates, literals, ETC.</td></tr>
          <tr><td>Symbol</td><td>used with objects</td></tr>
          </table>
      </div>
    );
  }
}

export default dataTypesBasics;
