import React from 'react';
import Stretch from './health/stretch.js'
import Systems from './health/systems.js'
import Nutrition from './health/nutrition.js'

class Health extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1 = (item) => {
    return() => {this.setState({tier1:item})}
  }
  pickTier2 = (item) => {
    return() => {this.setState({tier2:item})}
  }
  render () {
    const Items = [
      {name: 'Diet', slug: 'diet' },
      {name: 'Flexibility', slug: 'flexibility', component:<Stretch />},
      {name: 'Muscular Strength/endurance', slug: 'strength' },
      {name: 'Cardio', slug: 'cardio' },
      {name: 'Balance', slug: 'balance' },
      {name: 'Speed', slug: 'speed' },
      {name: 'Hormones', slug: 'hormones' },
      {name: 'Body Systems', slug: 'systems', component:<Systems />},
      {name: 'Nutrition', slug: 'nutrition', component:<Nutrition />},
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

export default Health;
