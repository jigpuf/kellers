import React from 'react';

class Checkouts extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const tier1Items = [
    {name: 'Valve Control(K)', slug: 'valveControl' },
    {name: 'Valve Feedback(E)', slug: 'valveFeedback' },
    {name: 'Limit(L)', slug: 'limit' },
    {name: 'Current Analog In(I)', slug: 'current' },
    {name: 'Voltage Analog In(V)', slug: 'voltage' },
    {name: 'Analog Out Voltage/Current', slug: 'analogOut' },
    {name: 'Analog Out FB(AOFB)', slug: 'aofb' },
    {name: 'Thermocouple(T)', slug: 'tc' },
    {name: 'RTD(R)', slug: 'rtd' },
    {name: 'Counter(C)', slug: 'counter' },
    {name: 'High Speed Dynamic(HS/D)', slug: 'hsDynamic' },
    {name: 'High Speed Voltage(HSV)', slug: 'hsv' },
    {name: 'High Speed Y Voltage(HSY)', slug: 'hsy' },
    {name: 'High Speed Strain(HSS)', slug: 'hss' },
  ]
  const renderTier1Items = tier1Items.map(item => {
    return (
      <button
        key={item.slug}
        onClick={this.pickTier1(item.slug)}
        className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
      >{item.name}</button>
    )
  })
  const tier1 = tier1Items.filter(item => {
    return this.state.tier1 === item.slug;
  });
  const renderTier2Component = tier1[0] && tier1[0].component;
  return (
    <div>
    <div>
      <ul>
        {renderTier1Items}
      </ul>
      <hr />
      {renderTier2Component}
    </div>
    <div>
        //Low Speed System
        <h3>Low Speed PXI and SCXI Systems on NI MAX</h3>
        <div className='twoColumn'>
        <ol>
          <li>Valve Digital Out(K)</li>
          <li>Module Types: PXI-6512/SCB-100</li>
          <li>Instrument Types:</li>
          <li>Non-Throttable Valve</li>
          <li>Triggers</li>
          <li>Enables</li>
          <li>Exciter Power</li>
          <li>Spark Command</li>
          <li>MAX Settings:</li>
        </ol>
          <li>Valve Feedback(E)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>Typically on RTX</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>Valve Feedback</li>
                </ul>
              <li>MAX Settings:</li>
            </ol>
          <li>Limit(L)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>Typically on RTX</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>Limit Heads</li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
          <li>Current Analog In(I)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXIe-4302/TB-4302</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>Pressure Transducers</li>
                  <li>Temperature Transducer</li>
                  <li>Dynamic Pressure </li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
          <li>Voltage Analog IN(V)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXIe-4302/TB-4302</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>Valve Position Feedback</li>
                  <li>LVDT</li>
                  <li>PSU Voltage Feedback</li>
                  <li>Pressure Transducer</li>
                  <li>Gas Sensor</li>
                  <li>Flow Meter</li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
          <li>Analog Out Voltage/Current(AO)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXIe-4322/TB-4322</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li></li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
          <li>Analog Out Feedback Voltage(AOFB)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXIe-4302/TB-4302</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>ER3K</li>
                  <li>V200</li>
                  <li>Triggers</li>
                  <li>Stat Lines</li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
          <li>Thermocouple(T)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXIe-4353/TB-4353</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>E/K Type Thermocouples</li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
          <li>RTD(R)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXIe-4357/TB-4357</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>RTD's</li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
          <li>Counter(C)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXI-6624/SCB-100</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>Flow Meter</li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
        </div>

        <h3>High Speed PXI and SCXI Systems on NI MAX</h3>
        <div className='twoColumn'>
        <ol>
          <li>High Speed Dynamic Voltage(HS/D)</li>
            <ol>
              <li>Module Types:</li>
                <ul>
                  <li>PXIe-4497</li>
                </ul>
              <li>Instrument Types:</li>
                <ul>
                  <li>Dynamic Pressure Ducers</li>
                  <li>Accelerometers</li>
                  <li>Microphone</li>
                </ul>
              <li>Meter Setup:</li>
              <li>MAX Settings:</li>
            </ol>
            <li>High Speed Voltage(HSV)</li>
              <ol>
                <li>Module Types:</li>
                  <ul>
                    <li>PXIe-4300/TB-4300</li>
                  </ul>
                <li>Instrument Types:</li>
                  <ul>
                    <li>Spark Feedback</li>
                    <li>LVDTs</li>
                    <li>ZTS</li>
                  </ul>
                <li>Meter Setup:</li>
                <li>MAX Settings:</li>
              </ol>
            <li>High Speed Y Voltage(HSY)</li>
              <ol>
                <li>Module Types:</li>
                  <ul>
                    <li>PXIe-4303/TB-4302</li>
                  </ul>
                <li>Instrument Types:</li>
                  <ul>
                    <li>Low Speed Current Channels</li>
                  </ul>
                <li>Meter Setup:</li>
                <li>MAX Settings:</li>
              </ol>
            <li>High Speed Strain(HSS/S)</li>
              <ol>
                <li>Module Types:</li>
                  <ul>
                    <li>PXIe-4330/TB-4330</li>
                  </ul>
                <li>Instrument Types:</li>
                  <ul>
                    <li>Strain Gauges</li>
                    <li>Load Cell</li>
                  </ul>
                <li>Meter Setup:</li>
                <li>MAX Settings:</li>
              </ol>
              </ol>
        </div>
        <div>
        <h3>Resources:</h3>
        <a href="https://www.youtube.com/watch?v=dvDpOA4Cs3c"
        >NI MAX Intro</a><br />
        <a href="https://www.youtube.com/watch?v=9z4Hgx13ujs"
        >NI MAX Create Task</a>
        <br /><br /><br /><br />
        </div>

      </div>
</div>
  )
  }
}

export default Checkouts;
