import React from 'react';
import City from './restaurants/city.js';
import Waco from './restaurants/waco.js';

class Restaurants extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1 = (item) => {
    return() => {this.setState({tier1:item})
  }
  }
//This is function to change tier1 state
//There needs to be state changes to bring up new buttons

  render () {

    const Items = [
      {name: 'City', slug: 'city', component:<City />},
      {name: 'Waco', slug: 'waco', component:<Waco />},
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

export default Restaurants;
