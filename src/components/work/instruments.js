import React from 'react'
import Valves from './instruments/valves.js'
import Heaters from './instruments/heaters.js'
import Strain from './instruments/strain.js'
import Gas from './instruments/gas.js'
import Avionics from './instruments/avionics.js'
import Coms from './instruments/coms.js'

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
      {name: 'Positioners', slug: 'position', component:<Valves />},
      {name: 'Heaters', slug: 'heaters', component:<Heaters /> },
      {name: 'Position Feedback', slug: 'limits' },
      {name: 'Motion', slug: 'motion' },
      {name: 'Strain', slug: 'strain', component:<Strain /> },
      {name: 'Igniters', slug: 'igniter' },
      {name: 'Gas Sensors', slug: 'gas', component:<Gas />},
      {name: 'Flame Detectors', slug: 'flame' },
      {name: 'Clear Path', slug: 'clearPath' },
      {name: 'Proximity', slug: 'prox' },
      {name: 'Flow', slug: 'flow' },
      {name: 'Microphones', slug: 'microphones' },
      {name: 'Pressure', slug: 'pressure' },
      {name: 'Temperature', slug: 'tempFeedback' },
      {name: 'PID Theory', slug:'pid',},
      {name: 'Avionics Box', slug:'avionics', component:<Avionics />},
      {name: 'Coms', slug:'coms', component:<Coms />}

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
