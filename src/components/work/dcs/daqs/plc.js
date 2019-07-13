import React from 'react';

class Plc extends React.Component {
  render () {
    return (
      <div>
      <h3>PLC:</h3>
      <ul>
        <li>Hardware:</li>
          <ol>
            <li>We are moving toward compactlogix for use on our PLC systems.</li>
            <li>Valve Chanels(K)</li>
            <li>Valve Feedback Channel(E)</li>
            <li>Limit Channel(L)</li>
            <li>Current Channel(I)</li>
            <li>Voltage Channel(V)</li>
            <li>Themocouple/RTD Chanels(T,R)</li>
            <li>Power</li>
            <li>Processor</li>
            <li>Remote I/O</li>
          </ol>
        <li>Software:</li>
          <ol>
            <li>Development Software</li>
            <li>Software Department needs </li>
            <li>Software arrangement for program</li>
              <ol>
                <li>Initialize</li>
                <li>Inputs</li>
                <li>Cals</li>
                <li>Output</li>
                <li>Repeat</li>
                <li>Pass through commands</li>
              </ol>
          </ol>
        <li>IT:</li>
          <ol>
            <li>Available Ports</li>
            <li>Vlan</li>
          </ol>
        <li>Communications</li>
      </ul>
      </div>
    );
  }
}

export default Plc;
