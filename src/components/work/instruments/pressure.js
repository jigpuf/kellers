import React from 'react';

class Pressure extends React.Component {
  render () {
    return (
      <div>
        <table>
          <tr>
            <th>Model</th><th>Pin 1</th><th>Pin 2</th><th>Pin 3</th><th>Pin 4</th><th>Pin 5</th><th>Pin 6</th><th>Signal</th>
          </tr>
          <tr>
            <td>GP-50</td><td>Red:Current (+)</td><td>-------</td><td>-------</td><td>Black:Current (-)</td><td>-------</td><td>-------</td><td>4-20 mA</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Pressure;
