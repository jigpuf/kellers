import React from 'react';

class Temperature extends React.Component {
  render () {
    return (
      <div>
      <h2>Temperature</h2>
        <h3>TC Pinout</h3>
          <table>
          <tr><th>TC Type</th><th>+ Color</th><th>- Color</th><th>Material</th></tr>
          <tr><td>K</td><td>Yellow</td><td>Red</td><td>Nickel-Chromium/Nickel-Alumel</td></tr>
          <tr><td>E</td><td>Purple</td><td>Red</td><td>Nickel-Chromium/Constantan</td></tr>
          </table>
        <h3>TC Checkout</h3>
          <img src='/instrumentation/tcMeasure.jpeg' />
        <h3>TC Simulate</h3>
          <img src='/instrumentation/tcSource.jpeg'/>
          <hr />
        <h2>RTD</h2>
          <h3>RTD Pinout</h3>
          <tr><th>Pin</th><th>Signal</th></tr>
          <tr><td>1</td><td>Red/Excite +</td></tr>
          <tr><td>2</td><td>White/Feedback +</td></tr>
          <tr><td>3</td><td>Green/Feedback -</td></tr>
          <tr><td>4</td><td>Black/Excite -</td></tr>
          <h4>Connectors:</h4>

          <h3>RTD Checkout</h3>
          Meter Setting: measure RTD PT100 4 Wire<br />
          <table>
            <tr><th>Meter Setting</th><th>Button</th></tr>
            <tr><td>Measure</td><td>Measure/Source</td></tr>
            <tr><td>RTD PT100</td><td>RTD</td></tr>
            <tr><td>4 Wire</td><td>Up</td></tr>
          </table>
          Cable connections<br />
          <table>
            <tr><th>Meter Spot</th><th>Signal</th></tr>
            <tr><td>V on source side</td><td>Feedback +</td></tr>
            <tr><td>3 Wire on Source Side</td><td>Excite -</td></tr>
            <tr><td>Com on Source side</td><td>Feedback -</td></tr>
            <tr><td>4 Wire on source side</td><td>Excite +</td></tr>
          </table>
          <img src='/instrumentation/fluke725RTD.svg' />
          <h3>Simulate</h3>
      </div>
    );
  }
}

export default Temperature;
