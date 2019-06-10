import React from 'react';
import Food from './survival/food.js';
import Defense from './survival/defense.js';

class Survival extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render (){
    const Items = [
      {name: 'Communications', slug: 'coms' },
      {name: 'Defense', slug: 'defense', component:<Defense /> },
      {name: 'Disasters', slug: 'disaster' },
      {name: 'Energy', slug: 'energy' },
      {name: 'Fire', slug: 'fire' },
      {name: 'First Aid', slug: 'aid' },
      {name: 'Food', slug: 'food', component:<Food />},
      {name: 'Navigation', slug: 'navigation' },
      {name: 'Recreation', slug: 'recreation' },
      {name: 'Shelter', slug: 'shelter' },
      {name: 'Water', slug: 'water' },
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

export default Survival;
