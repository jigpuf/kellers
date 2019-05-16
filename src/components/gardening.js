import React from 'react';

class Gardening extends React.Component {
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
      {name: 'Ground Gardening', slug: 'ground' },
      {name: 'Square foot', slug: 'sqft' },
      {name: 'Companion Planting', slug: 'companion' },
      {name: 'Seasons', slug: 'seasons' },
      {name: 'Plant Cures', slug: 'cures' },
      {name: 'Aquaponics', slug: 'aquaponics' },
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
export default Gardening;
