import React from 'react';

class Gas extends React.Component {
  render () {
    return (
      <div>
        Gas Detector:<br />
        <table>
          <tr>
            <th>Bulkhead Pin</th>
            <th>Signal Type</th>
            <th>Avionics cable color</th>
            <th>Detector Terminal</th>
          </tr>
          <tr>
            <td>A</td>
            <td>4-20+</td>
            <td>Violet</td>
            <td>4-20</td>
          </tr>
          <tr>
            <td>B</td>
            <td>4-20-</td>
            <td>Gray</td>
            <td>RTN</td>
          </tr>
          <tr>
            <td>C</td>
            <td>N/C</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>D</td>
            <td>Red Alarm +</td>
            <td>Red</td>
            <td>A on relay 3</td>
          </tr>
          <tr>
            <td>E</td>
            <td>Red Alarm -</td>
            <td>Brown</td>
            <td>Com on relay 3</td>
          </tr>
          <tr>
            <td>F</td>
            <td>Fault +</td>
            <td>Yellow</td>
            <td>A on relay 1</td>
          </tr>
          <tr>
            <td>G</td>
            <td>N/C</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>H</td>
            <td>Fault -</td>
            <td>Orange</td>
            <td>Com on relay 1</td>
          </tr>
          <tr>
            <td>J</td>
            <td>Yellow Alarm +</td>
            <td>Blue</td>
            <td>A on relay 2</td>
          </tr>
          <tr>
            <td>K</td>
            <td>Wellow Alarm -</td>
            <td>Green</td>
            <td>Com on relay 2</td>
          </tr>
          <tr>
            <td>L</td>
            <td>Power RTN</td>
            <td>Black</td>
            <td>RTN</td>
          </tr>
          <tr>
            <td>M</td>
            <td>Power +</td>
            <td>White</td>
            <td>V +</td>
          </tr>
        </table>
        Notes: 4-20 and power share the same return.  Relay 1 is on the same
        board as the 4-20/v+ terminals.  Relay 2 is the top relay on the other
        board and relay 3 is in the middle.  A is at the tops and B at the
        bottoms of each relay.<br />
        Avionics Internal Bulkhead connector:<br />
        Avionics External Barrel Connector:<br />
      </div>
    );
  }
}

export default Gas;
