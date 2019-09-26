import React from 'react';

class Gas extends React.Component {
  render () {
    return (
      <div>
        <h3>Gas Detector:</h3>
        <h4>Model and References</h4>
          Model Name=SENSALERT ASI RELAY<br />
          Part#=S2X-3RTH-AA<br />
          <img src='https://www.sensidynegasdetection.com/assets/images/sensalert-asi-fixed-point-gas-detector.jpg' /><br />
          <a href='https://www.sensidynegasdetection.com/products/industrial-point-gas-detection-products/sensalert-asi-point-gas-detector-sil-2-certified/' target='_blank'
          >Manufacturer Website</a><br />
          <a href='https://www.youtube.com/watch?v=SR3cXpViN5M' target='_blank'
          >Intro Video</a><br />
          <a href='https://www.sensidynegasdetection.com/Support%20Library/gas-detection/SensAlert%20ASI/SensAlert%20ASI%20transmitter%20manual.pdf' target='_blank'
          >Manual</a><br />
          Page 10- Part Number info<br />
          Page 17- Parts of LCD Screen<br />
          Pages 29-33 Wiring instrument<br />
          Pages 36-96 Menu maps<br />
          Pages 106-107 Troubleshooting guide<br />
          Page 114-115 Mounting Measurements<br />
        <h4>Device setup</h4>
            The setup of the device can be devided into 3 major sections<br />
          <li>Physical Build</li>
            Wires to sensor, Sensor Element installation, Mounting<br />
          <li>System Configuration</li>
            Set up for Gas Type, Set up alarms, Set up relays<br />
          <li>Calibration</li>
            Zero, Span
        <h4>Physical Build</h4>
          <h5>Device Pinout</h5>
            4-20 and power share the same return.  Relay 1 is on the same
            board as the 4-20/v+ terminals.  Relay 2 is the top relay on the other
            board and relay 3 is in the middle.  A(NC) is at the tops and B(NO) at the
            bottoms of each relay.<br />
            <li>Bottom board</li>
            Power, 4-20mA out, Relay1/Fault(blue alarm)
            <li>Top Board:</li>
            Relay 2 Lower (yellow) Alarm, Relay 3 High(red) Alarm, Relay 4 not used<br />
            <li>V+/RTN:  28 Volts</li>
            <li>4-20/RTN: Current Channel (I)</li>
            <li>Relay 1: (NC) (L?)</li>
            <li>Relay 2: (NC) (L?)</li>
            <li>Relay 3: (NC) (L?)</li>
          <h5>AWS Box Pinout</h5>
          Connectors:<br />
          <li>AWS Internal Bulkhead connector: D38999/2_WD97PC</li>
          <li>AWS External Barrel Connector: D38999/26_WD97SC</li>
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
              <td>Not Connected</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>D</td>
              <td>Red Alarm +</td>
              <td>Red</td>
              <td>A on relay 3 N.C.</td>
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
              <td>A on relay 1 N.C.</td>
            </tr>
            <tr>
              <td>G</td>
              <td>Not Connected</td>
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
              <td>A on relay 2 N.C.</td>
            </tr>
            <tr>
              <td>K</td>
              <td>Wellow Alarm -</td>
              <td>Green</td>
              <td>Com on relay 2</td>
            </tr>
            <tr>
              <td>L</td>
              <td>Power +</td>
              <td>White</td>
              <td>V +</td>

            </tr>
            <tr><td>M</td><td>Power RTN</td><td>Black</td><td>RTN</td></tr>
          </table>

          <h5>DAQ Pinout</h5>
          <h5>Sensor Element Installation</h5>
          <h5>Sensor mounting</h5>
        <h4>System Configuration</h4>
          <h5>Sensor Adjustment</h5>
            main menu>system configuration>sensor adjustment>select cal gas<br />
            <strong>Methane</strong><br />
            main menu>system configuration>sensor adjustment>select k factor<br />
            <strong>None</strong><br />
          <h5>Alarm Settings</h5>
            <p>
            This is setting the function of the alarms used by the sensor. When
            it shows relays asigned, just make sure the number relay is showing
            and not the other relays.  For example, if we want to assign relay
            2, and it says 1346, then we want to delete relays 1 and 3, and add
            relay 2.  Don't worry about the high numbers.  The result would be
            2,4,6.
            </p>
            main menu>system configuration>alarm settings>alarm functions>alarm1<br />
            <strong>relay 2, enabled,Setpoint = 12%LEL, Release = 7%LEL</strong><br />
            main menu>system configuration>alarm settings>alarm functions>alarm2<br />
            <strong>relay 3, enabled,Setpoint = 25%LEL, Release = 13%LEL</strong><br />
            main menu>system configuration>alarm settings>alarm functions>alarm3<br />
            <strong>disabled</strong><br />
            main menu>system configuration>alarm settings>alarm functions>twa alarm<br />
            <strong>disabled</strong><br />
            alarms:<br />
            <li>Alarm 1 = Yellow(25%LEL)-Warning</li>
            <li>Alarm 2 = Red(50%LEL)-Alarm</li>
          <h5>Relay Settings</h5>
            <p>This sets up the actual function of the relays</p>
            main>system configuration>alarm settings>relay one-fail<br />
            <strong>Non Latching, Norm Energized, Time Delay = 5s</strong><br />
            main>system configuration>alarm settings>relay two<br />
            <strong>Non Latching, Norm Energized, Time Delay = 1s</strong><br />
            main>system configuration>alarm settings>relay three<br />
            <strong>Non Latching, Norm Energized, Time Delay = 1s</strong><br />
        <h4>Calibration</h4>
          <p>The calibration side deals with the actual gasses</p>
            main>calibration mode>zero transmitter><br />
            Once aknowledged it will be expecting zero gas to be flowing into it<br />
            main>calibration mode> cal gas conc><br />
            Set this to the concentration of the cal gas that will be used<br />
            main>calibration mode> calibrate><br />
            Flow cal gas into sensor while doing this<br />

      </div>
    );
  }
}

export default Gas;
