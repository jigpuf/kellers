import React from 'react';

class FileSync extends React.Component {
  render () {
    return (
      <div>
        <h2>File_Sync</h2>
          <h3>Function</h3>
            <p>
              File_Sync is used to sync all the files that testing creates
              through tasks set up by engineering.  Currently, the tasks create
              3X files on high speed for both East Bay and North Bay.  It
              creates 1X file for GSE, NBLS, EBLS, WBLS.  In order for it to
              work, the signal has to come in on a channel that belongs to the
              file that the task is creating.  All file sync channels have to be
              on channels that can accept an analog voltage input.
            </p>
          <h3>Types of channels</h3>
            <table>
              <tr><th>Channel type</th><th>GSE</th><th>NB</th><th>EB</th><th>WB</th></tr>
              <tr><td>V</td><td>YES</td><td>YES</td><td>YES</td><td>YES</td></tr>
              <tr><td>HSY</td><td></td><td>YES</td><td>YES</td><td></td></tr>
              <tr><td>HS</td><td></td><td>YES</td><td>YES</td><td></td></tr>
              <tr><td>HSV</td><td></td><td>YES</td><td>YES</td><td></td></tr>
            </table>
          <h3>Current channels</h3>
            <table>
              <tr><th>System</th><th>Chasis/Module</th><th>AI</th><th>Channel</th></tr>
              <tr><td>GSE</td><td>C1/M12</td><td>18</td><td>V018</td></tr>
              <tr><td>EBHS</td><td>P1/M5</td><td>31</td><td>HSY255</td></tr>
              <tr><td>EBHS</td><td>P1/M9</td><td>15</td><td>HS047</td></tr>
              <tr><td>EBHS</td><td>P1/M14</td><td>15</td><td>HSV015</td></tr>
              <tr><td>EBLS</td><td>P1/M12</td><td>31</td><td>V063</td></tr>
              <tr><td>NBHS</td><td>P1/M5</td><td>31</td><td>HSY255</td></tr>
              <tr><td>NBHS</td><td>P1/M11</td><td>6</td><td>HSV014</td></tr>
              <tr><td>NBHS</td><td>P2/M3</td><td>15</td><td>HS031</td></tr>
              <tr><td>NBLS</td><td>P2/M12</td><td>31</td><td>V063</td></tr>
              <tr><td>WBLS</td><td>P1/M11</td><td>1</td><td>V001</td></tr>
            </table>
          <h3>Structure of File_Sync</h3>
            <img src='/instrumentation/file_sync.svg' />
      </div>
    );
  }
}

export default FileSync;
