import React from 'react';

class PlcConfigure extends React.Component {
  render () {
    return (
      <div>
        <h2>Configuration</h2>
          <p>
            Much of this can be set up with a new file but in the file is more
            useful to know.
          </p>
          <p>
            When opening a new file in Studio 5000, it will ask for the
            following info:
          </p>
          <table>
            <tr><th>Category</th><th>Info Needed</th></tr>
            <tr><td>Type</td><td>This is the type of processor bing used</td></tr>
            <tr><td>Name</td><td>Name of the project</td></tr>
            <tr><td>Revision</td><td>Controller firmware</td></tr>
            <tr><td>Description</td><td>Not needed unless requested</td></tr>
            <tr><td>Chasis type</td><td>Based on controller</td></tr>
            <tr><td>Slot</td><td>Slot where CPU lives, usually 0</td></tr>
            <tr><td>Created in</td><td>Where the file will live</td></tr>
          </table>
            Hit OK/Finish and it will build the file
        <h3>Chassis</h3>
        <h3>Comunications</h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </div>
    );
  }
}

export default PlcConfigure;
