import React from 'react';

class Converters extends React.Component {
  render () {
    return (
      <div>
        <h2>Converters</h2>
        Things to convert with this apps
        Units:
        <table>
            <tr><th>Unit</th><th>To</th><th>Conversion</th></tr>
            <tr><td>Farrenheit</td><td>Celcius</td><td>(5/9)(f-32)</td></tr>
            <tr><td>Celsius</td><td>Farrenheit</td><td>(9/5)(c)+32</td></tr>
            <tr><td>Celcius</td><td>Kelvin</td><td>c+273</td></tr>
            <tr><td>Kelvin</td><td>Celcius</td><td>k-273</td></tr>
            <tr><td>CCF</td><td>Therms</td><td></td></tr>
            <tr><td>Therms</td><td>CCF</td><td></td></tr>
            <tr><td>KWH</td><td>BTU</td><td></td></tr>
            <tr><td>Feet Seawater</td><td>Atmospheres</td><td>fsw/33+1</td></tr>
            <tr><td>Atmospheres</td><td>Feet Seawater</td><td>(ata-1)(33)</td></tr>
            <tr><td>Atmospheres</td><td>Pressure</td><td>(ata*14.7)</td></tr>
            <tr><td>inch</td><td>cm</td><td>inch*2.54</td></tr>
            <tr><td>cm</td><td>inch</td><td>cm*.394</td></tr>
            <tr><td>yard</td><td>meter</td><td>y*.914</td></tr>
            <tr><td>meter</td><td>yard</td><td>m*1.093</td></tr>
            <tr><td>mile</td><td>km</td><td>m*1.6</td></tr>
            <tr><td>km</td><td>mile</td><td>km*.621</td></tr>
            <tr><td>liter</td><td>quart</td><td>l*1.057</td></tr>
            <tr><td>quart</td><td>liter</td><td>q*.946</td></tr>
            <tr><td>pound</td><td>kilo</td><td>lb*.454</td></tr>
            <tr><td>kilo</td><td>pound</td><td>k*2.2</td></tr>
            <tr><td>oz</td><td>gram</td><td>oz*28.35</td></tr>
            <tr><td>gram</td><td>oz</td><td>g*.035</td></tr>
        </table>
        Equivilencies in volume:<br />
        <table>
          <tr><th>=</th><th>Gallon</th><th>Quart</th><th>Pint</th><th>Cup</th><th>oz</th><th>TBSPN</th><th>Teaspoon</th></tr>
          <tr><td>Gallon</td><td>1</td><td>4</td><td>8</td><td>16</td><td>128</td><td></td><td></td></tr>
          <tr><td>Quart</td><td>1/4</td><td>1</td><td>2</td><td>4</td><td>32</td><td></td><td></td></tr>
          <tr><td>Pint</td><td>1/8</td><td>1/2</td><td>1</td><td>2</td><td>16</td><td></td><td></td></tr>
          <tr><td>Cup</td><td>1/16</td><td>1/4</td><td>1/2</td><td>1</td><td>8</td><td></td><td></td></tr>
          <tr><td>Oz</td><td>1/128</td><td></td><td></td><td></td><td>1</td><td></td><td></td></tr>
          <tr><td>TBSPN</td><td></td><td></td><td></td><td></td><td></td><td>1</td><td></td></tr>
          <tr><td>TSPN</td><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr>
        </table>

        Water displacement weights:<br />
        <table>
          <tr><th>water</th><th>Displacement weight</th></tr>
          <tr><td>Salt</td><td>64 lbs/foot cubed</td></tr>
          <tr><td>Fresh</td><td>62.4 lbs/ foot cubed</td></tr>
        </table>

      </div>
    );
  }
}

export default Converters;
