import React from 'react';
import Morning from './check/morning.js'
import Night from './check/night.js'
import Concerns from './check/concerns.js'
import Upkeep from './check/upkeep.js'

class Check extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {

    const Items = [

      {name: 'Morning', slug: 'morning', component:<Morning />},
      {name: 'Night', slug: 'night', component:<Night />},
      {name: 'Concerns', slug: 'concers', component:<Concerns />},
      {name: 'Upkeep', slug: 'upkeep', component:<Upkeep />},
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
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}
export default Check;
