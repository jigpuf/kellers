import React from 'react';

class Pressure extends React.Component {
  render () {
    return (
      <div>
        <h3>Pinout</h3>
        <table>
          <tr>
            <th>Model</th><th>Pin 1</th><th>Pin 2</th><th>Pin 3</th><th>Pin 4</th><th>Pin 5</th><th>Pin 6</th><th>Signal</th>
          </tr>
          <tr>
            <td>GP-50</td><td>Red:Current (+)</td><td>-------</td><td>-------</td><td>Black:Current (-)</td><td>-------</td><td>-------</td><td>4-20 mA</td>
          </tr>
        </table>
        <h3>Sources For GUI:</h3>
        <h4>MWL</h4>
        Provides instrument Name, Instrument Channel, and channel location
        on the card.  This is how the Gui knows where to look on the DAQ for the
        raw signal.<br />
        <h4>Scaling config</h4>
        Gives an equation<br />
        Instrument Name | Calculation | Offset(ambietize) | Serial # | Max<br />
        Instrument Name: Is recieved from the MWL<br />
        Calculatio: (((Raw * Slope) + Offset) * Conversion)+Ambiatize<br />
        Raw: From Card Edge<br />
        Slope: Either from spec sheet or Generic PSI/Amp<br />
        PSI/Amp = Max PSI/.016A<br />
        Offset: Comes from spec Sheet<br />
        Conversion: This changes calc from PSI to Bar, PSI/Bar or .068947<br />
        Ambiatize: this is what is required to get output of ((Raw * Slope) +
        Offset) * Conversion, to equal 1 bar<br />
        Serial Number and Max: These are just reference<br />
        <h3>Example:</h3>
        Instrument; [raw],slope, offset, conversion, 0; ambietiaze, serial, max<br />
        NPD-5604; [NPD-5604],937500,-3400,.068947,0 ; -.4 ; #23453; 1033<br />
        For 10mA: (((.01 A*(937500 PSI/AMP))-3400 PSI)*(.068947 Bar/PSI)-.4 Bar<br />
        Answer = 411 bar<br />
      </div>
    );
  }
}

export default Pressure;
