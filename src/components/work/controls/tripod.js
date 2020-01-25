import React from 'react';

class Tripod extends React.Component {
  render () {
    return (
      <div>
        <h2>Tripid Controls Hardware</h2>
        <table>
          <tr><th>Box</th><th>Chasis</th><th>Module</th><th>Hardware</th><th>Channel</th><th>Instrument Type</th></tr>
          <tr><td>6400</td><td>1-5</td><td>9476 Relay</td><td>Relay Command</td><td>Valve</td></tr>
          <tr><td>6400</td><td>1-5</td><td>9205 AI(V)</td><td>Relay Command</td><td>Valve Feedback</td></tr>
          <tr><td>6400</td><td>1-5</td><td>9205 AI(V)</td><td>Limit Board</td><td>Limit</td></tr>
          <tr><td>6400</td><td>1-5</td><td>9216 RTD 100&Omega;	</td><td>None</td><td>RTD</td></tr>
          <tr><td>6401</td><td>6</td><td>9476 Relay</td><td>Relay Command</td><td>Valve</td></tr>
          <tr><td>6401</td><td>6</td><td>9205 AI(V)</td><td>Relay Command</td><td>Valve Feedback</td></tr>
          <tr><td>6401</td><td>6</td><td>9205 AI(V)</td><td>Limit Board</td><td>Limit</td></tr>
          <tr><td>6401</td><td>6</td><td>9205 AI(V)</td><td>Formic</td><td>AI(V/I)</td></tr>
          <tr><td>6401</td><td>6</td><td>TC</td><td>None</td><td>Tc</td></tr>
          <tr><td>6401</td><td>7-10</td><td>9266 AO(I)</td><td>None</td><td>AO(I)</td></tr>
          <tr><td>6401</td><td>7-10</td><td>9205 AI(V)</td><td>Formic</td><td>AI(V/I)</td></tr>
          <tr><td>6401</td><td>7-10</td><td>TC</td><td>None</td><td>TC</td></tr>
          <tr><td>6401</td><td>7-10</td><td>9264 AO(V)</td><td>None</td><td>AO(V)</td></tr>
          <tr><td>6401</td><td>7-10</td><td>9205 AI(V)</td><td>Formic</td><td>AI(V/I)</td></tr>
          <tr><td>6402</td><td>11-14</td><td>9205 AI(V)</td><td>Formic</td><td>AI(V/I)</td></tr>
          <tr><td>6402</td><td>HS 1</td><td>9220 AI(V)</td><td>Formic</td><td>AI(V/I)</td></tr>
          <tr><td>6402</td><td>HS 2</td><td>9234 AI(+/-5V)</td><td>None</td><td> IEFE?</td></tr>
          <tr><td>6402</td><td>HS 3</td><td>9237 AI Bridge</td><td>None</td><td>Load Cell</td></tr>
        </table>




      </div>
    );
  }
}

export default Tripod;
