import React from 'react';
import Crimpers from './tools/crimpers.js'
import TroubleshootingToolbox from './tools/troubleshootingToolbox.js'

class Tools extends React.Component {
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
      {name: 'Hole Punch', slug: 'hole',},
      {name: 'Label Maker', slug: 'label',},
      {name: 'Crimpers', slug: 'crimpers', component:<Crimpers />},
      {name: 'Troubleshooting', slug: 'troubleshooting', component:<TroubleshootingToolbox />},
      {name: 'Swagelock', slug: 'swage',},
      {name: 'Multi-Meter', slug: 'multiMeter',},
      {name: 'O-Scope', slug: 'oScope',},
      {name: 'Function Generator', slug: 'functionGenerator',},

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
export default Tools;
