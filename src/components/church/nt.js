import React from 'react';

class Nt extends React.Component {
  state= {
  tier2: undefined,
}
pickTier2 = (item) => {
  return () => {
    this.setState({tier2:item})
  }
}
  render () {
    const Items = [
      {name: 'Story', slug: 'story'},
      {name: 'Temple', slug: 'Temple'},
      {name: 'Wisdom', slug: 'wisdom'},
      {name: 'Symbolism', slug: 'symbolism'},
    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier2(item.slug)}
          className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
          >{item.name}</button>
      )
    })
    const tier2 = Items.filter(item => {
      return this.state.tier2 === item.slug;
    });
    const renderTier3Component = tier2[0] && tier2[0].component;
    return (
      <div>
        <ul>
        {renderItems}
        <hr />
        {renderTier3Component}
        </ul>
      </div>
    );
  }
}
export default Nt;
