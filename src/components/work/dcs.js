import React from 'react';
import Panels from './dcs/panels.js';
import Computer from './dcs/computer.js';
import Checkouts from './dcs/systemCheckouts.js';
import Electronics from './dcs/electronics.js'
import Instruments from './dcs/instruments.js'
import Training from './dcs/training.js'
import Cables from './dcs/cables.js'
import Daqs from './dcs/daqs.js'
import Coms from './dcs/coms.js'
import Raceways from './dcs/raceways.js'
import Codes from './dcs/codes.js'
import Tools from './dcs/tools.js'
import Power from './dcs/power.js'
import Safety from './dcs/safety.js'


class Dcs extends React.Component {
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
      {name: 'Panels(2)', slug: 'panels', component:<Panels />},
      {name: 'Instrumentation', slug: 'instruments', component:<Instruments /> },
      {name: 'Electronics', slug: 'electronics', component:<Electronics />},
      {name: 'DAQS', slug: 'daqs', component:<Daqs />},
      {name: 'Computer Skills', slug: 'computer', component:<Computer />},
      {name: 'System Checkouts', slug: 'system', component:<Checkouts />},
      {name: 'Cables', slug: 'cables', component:<Cables /> },
      {name: 'Codes', slug: 'codes', component:<Codes />},
      {name: 'Tools', slug: 'tools', component:<Tools />},
      {name: 'Raceways', slug: 'raceways', component:<Raceways />},
      {name: 'Coms', slug: 'coms', component:<Coms />},
      {name: 'Training', slug: 'training', component:<Training />},
      {name: 'Power Distribution', slug: 'power', component:<Power />},
      {name: 'Safety', slug: 'safety', component:<Safety />},
      {name: 'Matrix', slug: 'matrix'},
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
export default Dcs;
