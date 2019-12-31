import React from 'react';

class PlcHardware extends React.Component {
  render () {
    return (
      <div>PLC hardware:
        <table>
          <tr><th>Part Type</th><th>Part Number</th><th>Note</th></tr>
          <tr><td>CPU</td><td>L33ER</td><td></td></tr>
          <tr><td>PSU</td><td>PB-4</td><td></td></tr>
          <tr><td>Digital In</td><td>1769-IQ32</td><td></td></tr>
          <tr><td>Digital Out</td><td>1769-OW16</td><td></td></tr>
          <tr><td>Analog In</td><td></td><td></td></tr>
          <tr><td>Analog Out</td><td></td><td></td></tr>
          <tr><td>TC</td><td></td><td></td></tr>
          <tr><td>RTD</td><td></td><td></td></tr>
          <tr><td>End Cap(Not Linking)</td><td>1769-ECR</td><td></td></tr>
        </table>
        Notes:<br />
        <li>No more than 3 modules between PSU and controller</li>
        <li>Any bank with CPU can only handle 8 Modules</li>
        <li>End caps can add more modules without CPU not sure how many</li>
        <li>Brian usually puts inputs before outputs</li>
      </div>
    );
  }
}

export default PlcHardware;
