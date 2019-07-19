import React from 'react';
import Time from './efficiency/time.js';
import Resources from './efficiency/resources.js';
import Space from './efficiency/space.js';
import Simplicity from './efficiency/simplicity.js';
import Health from './efficiency/health.js';
import Exchange from './efficiency/exchange.js';

class Efficiency extends React.Component {
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
      {name: 'Exchange Principle', slug: 'exchange', component:<Exchange /> },
      {name: 'Time', slug: 'time', component:<Time /> },
      {name: 'Resources', slug: 'resources', component:<Resources />},
      {name: 'Space', slug: 'space', component:<Space />},
      {name: 'Simplicity', slug: 'simplicity', component:<Simplicity />},
      {name: 'Health', slug: 'health', component:<Health />},


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
          Efficiency hopes to maximize assets<br/>
          {renderItems}
        </ul>
        <hr />

        {renderTier2Component}
      </div>
    )
    }
  }

export default Efficiency;
