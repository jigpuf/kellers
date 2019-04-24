import React from 'react';

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
    const tier1Items = [
      {name: 'Tactics', slug: 'tactics' },
      {name: 'Food Storage', slug: 'storage' },
      {name: 'Survival gear', slug: 'camping' },
      {name: 'Skills', slug: 'skills' },
      {name: 'Communications', slug: 'coms' },
      {name: 'Disasters', slug: 'Disaster' },
      {name: 'Cooking', slug: 'cooking' },
      {name: 'Solar', slug: 'solar' },
      {name: 'Fire', slug: 'Fire' },
      {name: 'Water', slug: 'Water' },
      {name: 'Shelter', slug: 'Shelter' },
      {name: 'First Aid', slug: 'aid' },
      {name: 'Navigation', slug: 'navigation' },
      {name: 'Resources', slug: 'resources' },
    ]
    const renderTier1Items = tier1Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = tier1Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderTier1Items}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Survival;
