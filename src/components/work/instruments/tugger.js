import React from 'react';

class Tugger extends React.Component {
  render () {
    return (
      <div>
        <h2>Tugger</h2>
          What it does: A servo drives the tugger to pull a specific amount on
          the load head<br />
        <h3>Part Numbers</h3>
        <h3>Websites/manuals</h3>
        <h3>Videos</h3>
        <h3>Channels</h3>
        <table>
          <tr><th>ammount</th><th>Channel</th><th>Use</th></tr>
          <tr><td>1</td><td>AO</td><td>Servo Control</td></tr>
          <tr><td>2</td><td>AI(I)</td><td>Pressure Sensor</td></tr>
          <tr><td>3</td><td>K</td><td>2X vent valves, 1X</td></tr>
          <tr><td>1</td><td>AI(V)</td><td>Servo board output feedback</td></tr>
          <tr><td>2</td><td>HSS</td><td>Load cell</td></tr>
        </table>
        <h3>Wiring</h3>
        <h3>Calibration</h3>
        <h3>Setup</h3>
      </div>
    );
  }
}

export default Tugger;
