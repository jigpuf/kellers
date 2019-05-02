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
          <li>Valve Digital Out(K):</li><br />
          Module Types: PXI-6512/SCB-100<br />
          Instrument Types: Non-Throttable Valve, Trigger, Enable,
          Exciter Power, Spark Command<br />
          MAX Settings:<br /><br />
          <li>Valve Feedback(E):</li><br />
          Module Types: Typically on RTX<br />
          Instrument Types: Valve Feedback<br />
          MAX Settings:<br /><br />
          <li>Limit(L)</li>
          Module Types: Typically on RTX<br />
          Instrument Types: Limit Heads<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>Current Analog In(I)</li>
          Module Types: PXIe-4302/TB-4302<br />
          Instrument Types: Pressure Transducers, Temperature Transducer,
          Dynamic Pressure<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>Voltage Analog IN(V)</li>
          Module Types: PXIe-4302/TB-4302<br />
          Instrument Types: Valve Position Feedback, LVDT, PSU Voltage Feedback,
          Pressure Transducer, Gas Sensor, Flow Meter<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>Analog Out Voltage/Current(AO)</li>
          Module Types: PXIe-4322/TB-4322<br />
          Instrument Types:<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>Analog Out Feedback Voltage(AOFB)</li>
          Module Types: PXIe-4302/TB-4302<br />
          Instrument Types: ER3K, V200, Triggers, Stat Lines<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>Thermocouple(T)</li>
          Module Types: PXIe-4353/TB-4353<br />
          Instrument Types: E/K Type Thermocouples<br />
          Meter Setup:<br />
          MAX Settings:<br />
          <li>RTD(R)</li>
          Module Types: PXIe-4357/TB-4357<br />
          Instrument Types: RTD's<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>Counter(C)</li>
          Module Types: PXI-6624/SCB-100<br />
          Instrument Types: Flow Meter<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
        </div>

        <h3>High Speed PXI and SCXI Systems on NI MAX</h3>
        <div className='twoColumn'>
          <li>High Speed Dynamic Voltage(HS/D)</li>
          Module Types: PXIe-4497<br />
          Instrument Types: Dynamic Pressure Ducers, Accelerometers,
          Microphone<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>High Speed Voltage(HSV)</li>
          Module Types: PXIe-4300/TB-4300<br />
          Instrument Types: Spark Feedback, LVDTs, ZTS<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>High Speed Y Voltage(HSY)</li>
          Module Types: PXIe-4303/TB-4302<br />
          Instrument Types: Low Speed Current Channels<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
          <li>High Speed Strain(HSS/S)</li>
          Module Types: PXIe-4330/TB-4330<br />
          Instrument Types: Strain Gauges, Load Cell<br />
          Meter Setup:<br />
          MAX Settings:<br /><br />
        </div>
        <div>
        <h3>Resources:</h3>
        <a href="https://www.youtube.com/watch?v=dvDpOA4Cs3c"
        >NI MAX Intro</a><br />
        <a href="https://www.youtube.com/watch?v=9z4Hgx13ujs"
        >NI MAX Create Task</a>
        <br /><br /><br /><br />
        </div>
        <img src='instrumentation/tcSource.jpeg'></img>
        <img src='instrumentation/tcMeasure.jpeg'></img>
      </div>
</div>
  )
  }
}

export default Checkouts;
