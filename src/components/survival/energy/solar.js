import React from 'react';

class Solar extends React.Component {
  render () {
    return (
      <div>
      <a href='https://www.youtube.com/watch?v=w4qcoEXYqK0' target='_blank'
      >The Ultimate Guide To DIY Off Grid Solar Power</a><br />
      <a href='https://www.youtube.com/watch?v=wL9PcGu_xrA' target='_blank'
      >DIY Solar Tracking System Inspired by NASA (Parker Solar Probe)</a><br />
      <a href='https://www.youtube.com/watch?v=QZYAAatdlmc' target='_blank'
      >High-Capacity Off-Grid Solar Generator (rev 4) -- Wiring Diagram, Parts List, Design Worksheet</a><br />
      Components:<br />
      <li>Panels</li>
        Watts, Series/Parallel
      <li>Charge Controller</li>
        MPPT,PWM
      <li>Battery</li>
        Series/Parallel, Capacity
      <li>Inverter</li>
        Peak Watts, Continuous Load
      <li>Controls</li>
        Timers, Switches, Logic, Relays
      <li>Load</li>
        Lights, Pumps, Motors, Sensors, Controls
      <li>Cable</li>
        Amperage, Voltage, Distance
      <li>Protection</li>
        Fuses, Breakers
      </div>
    );
  }
}

export default Solar;
