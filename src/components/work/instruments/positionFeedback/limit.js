import React from 'react';

class Limit extends React.Component {
  render () {
    return (
      <div>
      <h3>Wiring</h3>
        <li>Red-Open +</li>
        <li>Black-Open -</li>
        <li>White-Closed +</li>
        <li>Green-Closed -</li>
      <h3>Cam</h3>
        <li>Top Cam- Closed</li>
        <li>Bottom Cam- Open</li>
      <h3>Models:</h3>




      <h3>Information</h3>
        Model:<br />
        Part Number:<br />
        Manufacturer website<br />
        Videos:<br />
        Manual:<br />
      <h3>Physical Setup</h3>
        Circuit Diagram:<br />
        Mounting:<br />
        Pinouts:<br />
        Connectors<br />
      <h3>Setup</h3>
        Software<br />
        Paramaters<br />
      <h3>Calibration</h3>
      <h3>Troubleshooting</h3>
        Simulate Instrument:<br />
        Instrument Checkout:<br />
      <h3>Adding to software</h3>
      </div>
    );
  }
}

export default Limit;
