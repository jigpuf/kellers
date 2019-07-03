import React from 'react';
import Telecom from './instrumentation/telecom.js'
import Plc from './instrumentation/plc.js'
import Checkouts from './instrumentation/systemCheckouts.js'
import Instruments from './instrumentation/instruments.js'
import Electronics from './instrumentation/electronics.js'
import Controls from './instrumentation/controls.js'
import Avionics from './instrumentation/avionics.js'
import Ni from './instrumentation/ni.js'
import Power from './instrumentation/power.js'

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
      {name: 'NI', slug: 'ni', component:<Ni />},
      {name: 'Jbox build', slug: 'components', component:<Controls />},
      {name: 'PLC', slug: 'plc', component:<Plc />},
      {name: 'Channel Types', slug: 'checkouts', component:<Checkouts /> },
      {name: 'Power', slug: 'power', component:<Power />},
      {name: 'Instruments', slug: 'instruments', component:<Instruments /> },
      {name: 'Telecom', slug: 'telecom', component:<Telecom /> },
      {name: 'Electronics', slug: 'electronics', component:<Electronics />},
      {name: 'Avionics', slug: 'avionics', component:<Avionics />},
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
