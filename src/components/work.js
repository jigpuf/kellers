import React from 'react';
import Avionics from './work/avionics.js'
import Telecom from './work/telecom.js'

import Power from './work/power.js'
import Dcs from './work/dcs.js'
import It from './work/it.js'
import Mechanical from './work/mechanical.js'
import Software from './work/software.js'

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
      {name: 'Telecom', slug: 'telecom', component:<Telecom /> },
      {name: 'Avionics', slug: 'avionics', component:<Avionics />},
      {name: 'Power', slug: 'power', component:<Power />},
      {name: 'IT Department', slug: 'it', component:<It />},
      {name: 'Mechanical', slug: 'mechanical', component:<Mechanical />},
      {name: 'Software', slug: 'software', component:<Software />},
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
