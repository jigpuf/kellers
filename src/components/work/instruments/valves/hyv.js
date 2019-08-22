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
      <table>
        <tr><th>Pin</th><th>Signal</th></tr>
        <tr><td>A</td><td>24V POWER (+)</td></tr>
        <tr><td>B</td><td>POWER (-)</td></tr>
        <tr><td>C</td><td>POSITION FDBK (-)(V)</td></tr>
        <tr><td>D</td><td>CMD (4-20MA)(AO)</td></tr>
        <tr><td>E</td><td>CMD (-) (AO)</td></tr>
        <tr><td>F</td><td>POSITION FDBK (+)(V)</td></tr>
        <tr><td>G</td><td>NONE</td></tr>
      </table>
      <h4>Potentiometer</h4>
      4-wire cable
      <tr><th>POT Pin</th><th>CONDITIONER PIN</th></tr>
      <tr><td>7</td><td></td></tr>
      <tr><td>8</td><td></td></tr>
      <tr><td>9</td><td></td></tr>
      3-wire cable
      <tr><th>POT Pin</th><th>CONDITIONER PIN</th></tr>
      <tr><td>7</td><td></td></tr>
      <tr><td>8</td><td></td></tr>
      <tr><td>9</td><td></td></tr>
      <h3>Signal Conditioner</h3>
      <p>There is a signal conditioner that both provides power and get feedback
      from potentiometer so that it can be read on a voltage channel</p>
      <h4>Model</h4>
      <h4>Wiring</h4>
      <tr><th>Pin</th><th>SIGNAL</th></tr>
      <tr><td>1</td><td></td></tr>
      <tr><td>2</td><td></td></tr>
      <tr><td>3</td><td></td></tr>
      <tr><td>4</td><td></td></tr>
      <tr><td>5</td><td></td></tr>
      <tr><td>6</td><td></td></tr>
      <tr><td>7</td><td></td></tr>
      <tr><td>8</td><td></td></tr>
      <h4>Programming</h4>
      </div>
    );
  }
}

export default Hyv;
