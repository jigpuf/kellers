import React from 'react';
import Gardening from './food/gardening.js';
import Storage from './food/storage.js';
import Husbandry from './food/husbandry.js';
import Hunting from './food/hunting.js';
import Scavenging from './food/scavenging.js';
import Fishing from './food/fishing.js';

class Food extends React.Component {
  state = {
    tier2: undefined,
  }
  pickTier2 = (item) => {
    return() => {
      this.setState({tier2:item})
    }
  }
  render () {
    const Items = [
      {name:'Gardening', slug:'gardening', component:<Gardening />},
      {name:'Storage', slug:'storage', component:<Storage />},
      {name:'Husbandry', slug:'husbandry', component:<Husbandry />},
      {name:'Hunting', slug:'hunting', component:<Hunting />},
      {name:'Scavenging', slug:'scavenging', component:<Scavenging />},
      {name:'Fishing', slug:'fishing', component:<Fishing />},
    ]
    const renderItems = Items.map(item => {
      return (
            <button
              key={item.slug}
              onClick={this.pickTier2(item.slug)}
              className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
            >{item.name}</button>
          )
        });
        const tier2 = Items.filter(item => {
          return this.state.tier2 === item.slug;
        });
        const renderTier3Component = tier2[0] && tier2[0].component;
        return (
          <div>
            <ul>
              {renderItems}
            </ul>
            <hr />
            {renderTier3Component}
          </div>
        );
      }
    }


export default Food;
