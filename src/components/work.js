import React from 'react';
import Telecom from './work/telecom.js'
import Instruments from './work/instruments.js'
import Electronics from './work/electronics.js'
import Avionics from './work/avionics.js'
import Power from './work/power.js'
import Dcs from './work/dcs.js'

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
      {name: 'DCS', slug: 'dcs', component:<Dcs />},
      {name: 'Power', slug: 'power', component:<Power />},
      {name: 'Instrumentation', slug: 'instruments', component:<Instruments /> },
      {name: 'Telecom', slug: 'telecom', component:<Telecom /> },
      {name: 'Electronics', slug: 'electronics', component:<Electronics />},
      {name: 'Avionics', slug: 'avionics', component:<Avionics />},
      {name: 'IT Department', slug: 'it',},
      {name: 'Mechanical', slug: 'mechanical',},
      {name: 'Software', slug: 'software',},
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
