import React from 'react';

class Hyv extends React.Component {
  render () {
    return (
      <div>
      <p>There are several parts involved in this instrument</p>
      <li>3 solenoids</li>
      <li>3 Pressure Transducers</li>
      <li>1 Servo</li>
      <li>1 Potentiometer position sensor</li>
      <h3>Wiring</h3>
      <h4>Solenoids</h4>
      <li>- Power +</li>
      <li>- Power -</li>
      <h4>Pressure Transducers</h4>
      <li>- Current +</li>
      <li>- Current -</li>
      <h4>Servo</h4>
      <li>- </li>
      <li>- </li>
      <li>- </li>
      <li>- </li>
      <li>- </li>
      <h4>Potentiometer</h4>
      4-wire cable
      <li>7- </li>
      <li>8- </li>
      <li>9- </li>
      3-wire cable
      <li>7- </li>
      <li>8- </li>
      <li>9- </li>
      <h3>Signal Conditioner</h3>
      <p>There is a signal conditioner that both provides power and get feedback
      from potentiometer so that it can be read on a voltage channel</p>
      <h4>Model</h4>
      <h4>Wiring</h4>
      <h4>Programming</h4>
      </div>
    );
  }
}

export default Hyv;
