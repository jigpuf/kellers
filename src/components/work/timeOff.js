import React from 'react';

class TimeOff extends React.Component {
  render () {
    return (
      <div>
        <li>PTO does not count toward overtime</li>
        <li>Sick time does not count toward overtime</li>
        <li>Holiday counts toward weekly overtime but not daily</li>
        <li>Worked hours on Holiday count toward the OT calculation</li>

        Fridyays off:<br />
        Group A: RJ, Ivan, Allan, Maxie<br />
        Group B: Vic, Adam, Paul, Brian, Me<br />
        Days off:4-17,5-1,5-15,5-29, 6-12<br />

        Covid policy:<br />
        <ol>
        <li>confirmed of suspected, additional time off</li>
        <li>time given for suspected contact</li>
        <li>Employees at risk or at home with someone at risk get 10 days</li>
        <li>Employees can take sick, vacation or unpaid without penalty</li>
        </ol>
      </div>
    );
  }
}

export default TimeOff;
