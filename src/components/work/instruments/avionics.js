import React from 'react';

class Avionics extends React.Component {
  render () {
    return (
      <div>
      Avionics Throttle Control Power/Com:<br />
      <table>
        <tr><th>Ethernet Pin</th><th>Ethernet Color</th><th>Long Haul Color</th><th>Bulkhead Connector pin</th><th>Jumper Color</th><th>Controller Pin</th></tr>
        <tr><td>3</td><td>White/Green</td><td>Red</td><td>6</td><td>Red</td><td>1</td></tr>
        <tr><td>1</td><td>White/Orange</td><td>Orange</td><td>5</td><td>Orange</td><td>3</td></tr>
        <tr><td>6</td><td>Green</td><td>Black</td><td>4</td><td>Black</td><td>5</td></tr>
        <tr><td>2</td><td>Orange</td><td>Green</td><td>1</td><td>Green</td><td>6</td></tr>
      </table>
      The shield should be carried through the connector backshells all the way
      to the controller to DC power ground<br />
      Throttle Controller Power/Com Bulkhead connectors:24WA35PN, 26WA35SN<br />
      Throttle Controller Power/Com connector:26FA35SN

      Throttle Controller

      <img src='instrumentation/avionicsPower.svg'></img>
      </div>
    );
  }
}

export default Avionics;
