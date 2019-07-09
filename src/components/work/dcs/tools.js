import React from 'react';

class Tools extends React.Component {
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
      {name: 'Sockets', slug: 'sockets',},
      {name: 'Hole Punch', slug: 'hole',},
      {name: 'Grinder', slug: 'grinder',},
      {name: 'Band Saw', slug: 'band',},
      {name: 'Drill', slug: 'drill',},
      {name: 'Tape Measure', slug: 'measure',},
      {name: 'cutters/strippers', slug: 'cutters',},
      {name: 'Label Maker', slug: 'label',},
      {name: 'Heat Gun', slug: 'heat',},
      {name: 'Crimpers', slug: 'crimpers',},
      {name: 'Swagelock', slug: 'swage',},
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
export default Tools;
