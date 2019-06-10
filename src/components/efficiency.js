import React from 'react';

class Efficiency extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {

    const Items = [
      {name: 'Time', slug: 'time'},
      {name: 'Property', slug: 'property'},
      {name: 'Health', slug: 'health'},
      {name: 'Space', slug: 'Space'},
      {name: 'Simplicity', slug: 'simplicity'},
      {name: 'Spirituality', slug: 'spirituality'},
      {name: 'Relationships', slug: 'relationships'},
      {name: 'Knowledge', slug: 'knowledge'},
      {name: 'Experience', slug: 'experience'},
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
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Efficiency;
