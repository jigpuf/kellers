import React from 'react';
import Methodology from './efficiency/methodology.js';
import Time from './efficiency/time.js';
import Space from './efficiency/space.js';
import Health from './efficiency/health.js';
import Simplicity from './efficiency/simplicity.js';
import Property from './efficiency/resources.js';

class Efficiency extends React.Component {
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
      {name: 'Time', slug: 'time', component:<Time />},
      {name: 'Property', slug: 'property', component:<Property />},
      {name: 'Health', slug: 'health', component:<Health />},
      {name: 'Space', slug: 'Space', component:<Space />},
      {name: 'Simplicity', slug: 'simplicity', component:<Simplicity />},
      {name: 'Spirituality', slug: 'spirituality'},
      {name: 'Relationships', slug: 'relationships'},
      {name: 'Knowledge', slug: 'knowledge'},
      {name: 'Experience', slug: 'experience'},
      {name: 'Methodology', slug: 'methodology', component:<Methodology />}
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

export default Efficiency;
