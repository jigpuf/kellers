import React from 'react';
import Diet from '././food/diet.js'
import Stretch from './health/stretch.js'
import Strength from './health/strength.js'
import Cardio from './health/cardio.js'
import Balance from './health/balance.js'
import Speed from './health/speed.js'
import Hormones from './health/hormones.js'
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
      {name: 'Diet', slug: 'diet', component:<Diet /> },
      {name: 'Flexibility', slug: 'flexibility', component:<Stretch />},
      {name: 'Strength/Endurance', slug: 'strength', component:<Strength /> },
      {name: 'Cardio', slug: 'cardio', component:<Cardio /> },
      {name: 'Balance', slug: 'balance', component:<Balance /> },
      {name: 'Speed', slug: 'speed', component:<Speed /> },
      {name: 'Hormones', slug: 'hormones', component:<Hormones /> },
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
