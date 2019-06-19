import React from 'react';
import Valves from './instruments/valves.js'

class Instruments extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const Items = [
      {name: 'Valves', slug: 'Valves', component:<Valves />},
      {name: 'Pressure', slug: 'pressure' },
      {name: 'Limits', slug: 'limits' },
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
      {name: 'Coriolis', slug: 'coriolis' },
      {name: 'Microphones', slug: 'microphones' },
      {name: 'HOA Switches', slug: 'hoa' },
      {name: 'HART Protocol', slug: 'hoa' },

    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderItems}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Instruments;
