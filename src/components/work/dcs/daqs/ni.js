import React from 'react';

class Ni extends React.Component {
  render () {
    return (
      <div>
      <li>Header/Module to Jbox wiring(1)</li>
      <li>Telemetry Paths(2)</li>
      <li>PLC Ladder Logic(2)</li>
      <li>Module Swaps(2)</li>
      <li>Configure and checkout Allen Bradley hardware(3)</li>
      <li>NI Platform choice making and configuration(3)</li>
      <li>Creating Build list and ordering Hardware</li>
      <hr />
      <h4>Module Swap Proceedure</h4>
      <li>Tell engineering to bring down server</li>
      <li>Shut Down PXI top to bottom</li>
      <li>Shut Down SCXI Top to Bottom</li>
      <li>Get New Module and scan to Slot</li>
      Warpdrive - Warehouse Execution - 3Line Menu - Move Anything - scan module
      bar code, scan slot bar code
      <li>Get Old Module and scan to Self</li>
      Warpdrive - Warehouse Execution - 3Line Menu -Move Anything - scan module
      bar code, scan badge bar code
      <li>Turn on PXIs Top to Bottom</li>
      <li>Turn on SCXI Top to Bottom</li>
      <li>Turn on Server</li>
      <li>Tell Engineering it is comming on</li>
      <li>Take old module to metrology</li>
      </div>
    );
  }
}

export default Ni;
