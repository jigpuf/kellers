import React from 'react';

import Controls from './work/controls.js'
import Instruments from './work/instruments.js'
import Cables from './work/cables.js'
import Tools from './work/tools.js'
import Raceways from './work/raceways.js'
import Electronics from './work/electronics.js'
import Power from './work/power.js'
import Panels from './work/panels.js'
import Inventory from './work/inventory.js'
import Training from './work/training.js'
import Network from './work/network.js'
import Software from './work/software.js'
import Codes from './work/codes.js'
import Avionics from './work/avionics.js'
import TimeOff from './work/timeOff.js'



class Work extends React.Component {
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
      {name: 'Controls', slug: 'controls', component:<Controls />},
      {name: 'Instruments', slug: 'instruments', component:<Instruments /> },
      {name: 'Cables', slug: 'cables', component:<Cables /> },
      {name: 'Tools', slug: 'tools', component:<Tools />},
      {name: 'Raceways', slug: 'raceways', component:<Raceways />},
      {name: 'Electronics', slug: 'electronics', component:<Electronics />},
      {name: 'Power', slug: 'power', component:<Power />},
      {name: 'Panels', slug: 'panels', component:<Panels />},
      {name: 'Inventory', slug: 'inventory', component:<Inventory />},
      {name: 'Training', slug: 'training', component:<Training />},
      {name: 'Networking', slug: 'network', component:<Network /> },
      {name: 'Software', slug: 'computer', component:<Software />},
      {name: 'Codes', slug: 'codes', component:<Codes />},
      {name: 'Avionics', slug: 'avionics', component:<Avionics />},
      {name: 'TimeOff', slug: 'time', component:<TimeOff />},

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

export default Work;
