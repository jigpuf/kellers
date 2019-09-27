import React from 'react';

class Temperature extends React.Component {
  render () {
    return (
      <div>
      <h2>Temperature</h2>
        <h3>TC</h3>
          K-type
          <li>Yellow(+)</li>
          <li>Red(-)</li>
          E-type
          <li>Purple(+)</li>
          <li>Red(-)</li>
        <h3>RTD</h3>
          <li>1-Red-Power(+)</li>
          <li>2-Red-Feedback(+)</li>
          <li>3-White-Feedback(-)</li>
          <li>4-White-Power(-)</li>
          Connectors:<br />

          RTD Checkout with the 725<br />
          Set for measure RTD PT100 4 Wire<br />
          Measure=source/measure button<br />
          RTD = RTD button<br />
          PT100 = RTD button<br />
          4 Wire = up on selector buttons used to audjust levels<br />
          <table>
            <tr><th>Meter Spot</th><th>Signal</th></tr>
            <tr><td>V on source side</td><td>Excite +</td></tr>
            <tr><td>3 Wire on Source Side</td><td>Signal +</td></tr>
            <tr><td>Com on Source side</td><td>Signal -</td></tr>
            <tr><td>4 Wire on source side</td><td>Excite -</td></tr>
          </table>
          <img src='/instrumentation/fluke725RTD.svg' />
      </div>
    );
  }
}

export default Temperature;
