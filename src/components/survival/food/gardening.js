import React from 'react';
import MicroGreens from './gardening/microGreens.js'

class Gardening extends React.Component {
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
      {name: 'Ground Gardening', slug: 'ground' },
      {name: 'Square foot', slug: 'sqft' },
      {name: 'Companion Planting', slug: 'companion' },
      {name: 'Seasons', slug: 'seasons' },
      {name: 'Plant Cures', slug: 'cures' },
      {name: 'Aquaponics', slug: 'aquaponics' },
      {name: 'Micro greens', slug: 'micro', component:<MicroGreens />},
      {name: 'Sprouts', slug: 'sprouts',},
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

export default Gardening;
