import React from 'react';
import Networking from './instrumentation/networking.js'

class Instrumentation extends React.Component {
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
      {name: 'Valves', slug: 'Valves' },
      {name: 'Pressure', slug: 'pressure' },
      {name: 'Accelerometers', slug: 'accels' },
      {name: 'Thermocouples', slug: 'thermocouples' },
      {name: 'RTDs', slug: 'rts' },
      {name: 'LVDTs', slug: 'lvdts' },
      {name: 'String Pots', slug: 'pots' },
      {name: 'Strain Gauges', slug: 'strain' },
      {name: 'Load Cells', slug: 'load' },
      {name: 'Igniters', slug: 'igniter' },
      {name: 'Gas Sensors', slug: 'gas' },
      {name: 'Flame Detectors', slug: 'flame' },
      {name: 'Clear Path', slug: 'clearPath' },
      {name: 'Heaters', slug: 'heaters' },
      {name: 'ZTSs', slug: 'zts' },
      {name: 'Flow', slug: 'flow' },
      {name: 'Cameras', slug: 'cameras' },
      {name: 'Microphones', slug: 'microphones' },
      {name: '3-Phase', slug: 'phase' },
      {name: 'Transformers', slug: 'transformers' },
      {name: 'HOA Switches', slug: 'hoa' },
      {name: 'Limits', slug: 'limits' },
      {name: 'VFD', slug: 'vfds' },
      {name: 'Explosion Codes', slug: 'explosion' },
      {name: 'Networking', slug: 'networking', component:<Networking /> },
      {name: 'PLC', slug: 'plc' },
      {name: 'NI Hardware', slug: 'ni' },
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
        <ul>
          {renderTier1Items}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Instrumentation;
