import React from 'react';

class Controls extends React.Component {
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
      {name: 'Fuse', slug: 'fuse',},
      {name: 'Contactor', slug: 'contactor',},
      {name: 'Relay', slug: 'relay',},
      {name: 'Power Supply', slug: 'power',},
      {name: 'HOA Switches', slug: 'hoa' },
      {name: 'Terminals', slug: 'terminals' },
      {name: 'Current Transducers', slug: 'ct' },
      {name: 'Relays', slug: 'relays' },

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


export default Controls;
/*<div>
<li>Contactors</li>
<li>Watlo Controllers</li>
<li>Breakers</li>
<li>Fuses</li>
<li>Relays</li>
<li></li>
<li></li>
<li></li>
</div>
);*/
