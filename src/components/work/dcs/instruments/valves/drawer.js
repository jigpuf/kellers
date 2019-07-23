import React from 'react';

class Drawer extends React.Component {
  render () {
    return (
      <div>
        <h4>Build List:</h4>
          Super Warning:
          <p>
            <strong>
            Do not connect the comand cable between the DAQ and drawer with the
            drawer powered up.  Do not land the power until the return for the
            drawer is landed.  Ignoring this can make all channels go High!!!
            </strong>
          </p>
          <li>(1X)128 Channel Valve Drawer</li>
          00649719-501
          <li>(2X) SH100</li>
          Types SH100-100-F, 2 Meters
          <li>(2X) 68 Pin SHC Cables</li>
          SHC68-C68-RDIO2, 2 Meters
          <li>(1X) Power connector</li>
          MS3470W18-8S
          <li>(8X) DB-37 Pin connectors</li>
          GSE-1757819-9,Pin Type=205089-1 (20-24AWG), -08 Crimper
          <li>(128X) automotive fuses</li>
          0287002.PXCN
          <hr />
        <h4>I/O Data</h4>
          <table>
            <tr>
              <th>Characteristic</th>
              <th>Min</th>
              <th>Typical</th>
              <th>Max</th>
            </tr>
            <tr>
              <td>Supply Voltage</td>
              <td>18V</td>
              <td>28V</td>
              <td>30V</td>
            </tr>
            <tr>
              <td>Comand Voltage</td>
              <td>3V</td>
              <td>10V</td>
              <td>28V</td>
            </tr>
            <tr>
              <td>Load Current</td>
              <td>0A</td>
              <td>2A</td>
              <td>5A</td>
            </tr>
            <tr>
              <td>Feedback Gain</td>
              <td>.95V/A</td>
              <td>1V/A</td>
              <td>1.05V/A</td>
            </tr>
          </table>
          <hr />
        <h4>DB37 Pinout</h4>
        <table>
          <tr>
           <th>Pin</th>
           <th>Channels 0-15 Power</th>
           <th>Pin</th>
           <th>Channels 0-15 Return</th>
          </tr>
          <tr>
           <td>1</td>
           <td>Channel 0 Drive</td>
           <td>20</td>
           <td>Channel 0 Return</td>
          </tr>
          <tr>
           <td>2</td>
           <td>Channel 1 Drive</td>
           <td>21</td>
           <td>Channel 1 Return</td>
          </tr>
          <tr>
           <td>3</td>
           <td>Channel 2 Drive</td>
           <td>22</td>
           <td>Channel 2 Return</td>
          </tr>
          <tr>
           <td>4</td>
           <td>Channel 3 Drive</td>
           <td>23</td>
           <td>Channel 3 Return</td>
          </tr>
          <tr>
           <td>5</td>
           <td>Channel 4 Drive</td>
           <td>24</td>
           <td>Channel 4 Return</td>
          </tr>
          <tr>
           <td>6</td>
           <td>Channel 5 Drive</td>
           <td>25</td>
           <td>Channel 5 Return</td>
          </tr>
          <tr>
           <td>7</td>
           <td>Channel 6 Drive</td>
           <td>26</td>
           <td>Channel 6 Return</td>
          </tr>
          <tr>
           <td>8</td>
           <td>Channel 7 Drive</td>
           <td>27</td>
           <td>Channel 7 Return</td>
          </tr>
          <tr>
           <td>9</td>
           <td>Channel 8 Drive</td>
           <td>28</td>
           <td>Channel 8 Return</td>
          </tr>
          <tr>
           <td>10</td>
           <td>Channel 9 Drive</td>
           <td>29</td>
           <td>Channel 9 Return</td>
          </tr>
          <tr>
           <td>11</td>
           <td>Channel 10 Drive</td>
           <td>30</td>
           <td>Channel 10 Return</td>
          </tr>
          <tr>
           <td>12</td>
           <td>Channel 11 Drive</td>
           <td>31</td>
           <td>Channel 11 Return</td>
          </tr>
          <tr>
           <td>13</td>
           <td>Channel 12 Drive</td>
           <td>32</td>
           <td>Channel 12 Return</td>
          </tr>
          <tr>
           <td>14</td>
           <td>Channel 13 Drive</td>
           <td>33</td>
           <td>Channel 13 Return</td>
          </tr>
          <tr>
           <td>15</td>
           <td>Channel 14 Drive</td>
           <td>34</td>
           <td>Channel 14 Return</td>
          </tr>
          <tr>
           <td>16</td>
           <td>Channel 15 Drive</td>
           <td>35</td>
           <td>Channel 15 Return</td>
          </tr>
        </table>
          <hr />
        <h4>Power Pinout</h4>
          <table>
            <tr>
             <th>Socket</th>
             <th>Signal</th>
            </tr>
            <tr>
             <td>A</td>
             <td>28V Power 30A</td>
            </tr>
            <tr>
             <td>B</td>
             <td>28V Power 30A</td>
            </tr>
            <tr>
             <td>C</td>
             <td>28V Power 30A</td>
            </tr>
            <tr>
             <td>D</td>
             <td>28V Power 30A</td>
            </tr>
            <tr>
             <td>E</td>
             <td>Power Return</td>
            </tr>
            <tr>
             <td>F</td>
             <td>Power Return</td>
            </tr>
            <tr>
             <td>G</td>
             <td>Power Return</td>
            </tr>
            <tr>
             <td>H</td>
             <td>Power Return</td>
            </tr>
          </table>
          <hr />
        <h4>Status LEDs</h4>
          <table>
            <tr>
              <th>Location</th>
              <th>On</th>
              <th>Off</th>
            </tr>
            <tr>
              <td>128 Fuse</td>
              <td>Fuse Good</td>
              <td>Fuse Blown</td>
            </tr>
            <tr>
              <td>1/ DC/DC Converter</td>
              <td>DC Power Active</td>
              <td>DC Power Inactive</td>
            </tr>
            <tr>
              <td> 1/ 3V Power Busses</td>
              <td>3V Power working</td>
              <td>3V Power Not Working</td>
            </tr>
            <tr>
              <td>1/ 10V Power Busses</td>
              <td>10V Power working</td>
              <td>10V Power Not Working</td>
            </tr>
            <tr>
              <td> 1/ +15V Analog Power Busses</td>
              <td>+15V Power working</td>
              <td>+15V Power Not Working</td>
            </tr>
            <tr>
              <td> 1/ -15V Analog Power Busses</td>
              <td>-15V Power working</td>
              <td>-15V Power Not Working</td>
            </tr>
            <tr>
              <td> 1/board fault LED</td>
              <td>Some Power rail Not Working</td>
              <td>All Power rails Working</td>
            </tr>
            <tr>
              <td>128 Solid State output</td>
              <td>Power to Load</td>
              <td>No Power to Load</td>
            </tr>
          </table>
          <hr />
        <h4>Sytem Setup</h4>
          <table>
            <tr>
              <th>Signal</th>
              <th>Drawer Port</th>
              <th>Destination</th>
              <th>Connector</th>
              <th>Part Number</th>
            </tr>
            <tr>
              <td>Command K000-063</td>
              <td>J1</td>
              <td>PXI 6512</td>
              <td>SH100</td>
              <td>Types SH100-100-F, 2 Meters</td>
            </tr>
            <tr>
              <td>Command K064-127</td>
              <td>J2</td>
              <td>PXI 6512</td>
              <td>SH100</td>
              <td>Types SH100-100-F, 2 Meters</td>
            </tr>
            <tr>
              <td>Current Feedback E000-063</td>
              <td>J3</td>
              <td>MultiFunction DAQ</td>
              <td>68 Pin SHC Cables</td>
              <td>SHC68-C68-RDIO2, 2 Meters</td>
            </tr>
            <tr>
              <td>Current Feedback E064-127</td>
              <td>J4</td>
              <td>MultiFunction DAQ</td>
              <td>68 Pin SHC Cables</td>
              <td>SHC68-C68-RDIO2, 2 Meters</td>
            </tr>
            <tr>
              <td>Valve Drive K000-15</td>
              <td>J5</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Valve Drive K016-31</td>
              <td>J6</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Valve Drive K032-47</td>
              <td>J7</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Valve Drive K048-63</td>
              <td>J8</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Valve Drive K064-79</td>
              <td>J9</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Valve Drive K080-95</td>
              <td>J10</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Valve Drive K096-111</td>
              <td>J11</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Valve Drive K112-127</td>
              <td>J12</td>
              <td>To Load</td>
              <td>DB-37 Pin</td>
              <td>GSE-1757819-9</td>
            </tr>
            <tr>
              <td>Power and Return for Drawer</td>
              <td>J13</td>
              <td>28V 30A, Return Busses</td>
              <td>Power Connector</td>
              <td>MS3470W18-8S</td>
            </tr>

          </table>
          <hr />
      </div>
    );
  }
}

export default Drawer;
