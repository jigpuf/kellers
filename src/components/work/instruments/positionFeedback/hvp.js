import React from 'react';

class Hvp extends React.Component {
  render () {
    return (
      <div>
      <h3>Wiring</h3>
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

export default Hvp;