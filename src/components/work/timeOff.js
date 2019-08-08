import React from 'react';

class TimeOff extends React.Component {
  render () {
    return (
      <div>
        <li>PTO does not count toward overtime</li>
        <li>Sick time does not count toward overtime</li>
        <li>Holiday counts toward weekly overtime but not daily</li>
        <li>Worked hours on Holiday count toward the OT calculation</li>


      </div>
    );
  }
}

export default TimeOff;
