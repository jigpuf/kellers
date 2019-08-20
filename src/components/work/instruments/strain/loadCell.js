import React from 'react';

class LoadCell extends React.Component {
  render () {
    return (
      <div>
        <table>
          <tr>
            <th>Model</th><th>Pin 1</th><th>Pin 2</th><th>Pin 3</th><th>Pin 4</th><th>Pin 5</th><th>Pin 6</th><th>Pin 7</th><th>Pin 8</th><th>Pin 9</th><th>Pin 10</th><th>Pin 11</th><th>Pin 12</th><th>Pin 13</th><th>Signal</th><th>Connector</th>
          </tr>
          <tr>
            <td></td><td>Excitation (+)</td><td>Excitation (-)</td><td>-------</td><td>Feedback (+)</td><td>Feedback (-)</td><td>-------</td><td>Remote Sense (+)</td><td>Remote Sense (-)</td><td>-------</td><td>Teds (+)</td><td>Teds (-)</td><td>-------</td><td>-------</td><td>mV to V</td><td></td>
          </tr>
          <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default LoadCell;
