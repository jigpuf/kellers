import React from 'react';
import Panels from './dcs/panels.js';
import Ni from './dcs/ni.js';
import Plc from './dcs/plc.js';
import Software from './dcs/software.js';
import Checkouts from './dcs/systemCheckouts.js';



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
      {name: 'Panels', slug: 'panels', component:<Panels />},
      {name: 'NI', slug: 'ni', component:<Ni />},
      {name: 'PLC', slug: 'plc', component:<Plc />},
      {name: 'Software', slug: 'software', component:<Software />},
      {name: 'System Checkouts', slug: 'system', component:<Checkouts />},
      {name: 'HART Protocol', slug: 'heart' },
      {name: 'Codes', slug: 'codes'},
      {name: 'Tools', slug: 'tools'},
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
