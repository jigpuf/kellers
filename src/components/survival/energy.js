import React from 'react';
import Solar from './energy/solar.js';
import Fuel from './energy/fuel.js';

class Energy extends React.Component {
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
      {name: 'Solar', slug: 'solar', component:<Solar /> },
      {name: 'Fuel', slug: 'fuel', component:<Fuel /> },
      {name: 'Wood', slug: 'wood',},
      {name: 'Propane', slug: 'propane',},
      {name: 'Gassifier', slug: 'gasifier',},
      {name: 'Gas Digester', slug: 'digester',},
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

export default Energy;
