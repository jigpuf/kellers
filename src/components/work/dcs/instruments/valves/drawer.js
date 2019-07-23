import React from 'react';

class Drawer extends React.Component {
  render () {
    return (
      <div>
        <h4>Build List:</h4>
          <li>(2X) SH100</li>
          Types SH100-100-F, 2 Meters
          <li>(2X) 68 Pin SHC Cables</li>
          SHC68-C68-RDIO2, 2 Meters
          <li>(1X) Power connector</li>
          MS3470W18-8S
          <li>(8X) DB-37 Pin connectors</li>
          Pin Type=, -08 Crimper
          <li>(128X) automotive fuses</li>
          0287002.PXCN
          <hr />
        <h4>DB37 Pinout</h4>
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
        <h4>Sytem Setup</h4>
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
      </div>
    );
  }
}

export default Drawer;
