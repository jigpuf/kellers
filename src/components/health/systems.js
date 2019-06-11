import React from 'react';

class Systems extends React.Component {
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
      {name: 'Cardiovascular', slug: 'cardiovascular'},
      {name: 'Digestive', slug: 'digestive'},
      {name: 'Endocrine', slug: 'endocrine'},
      {name: 'Lymphatic', slug: 'lymphatic'},
      {name: 'Muscular', slug: 'muscular'},
      {name: 'Nervous', slug: 'nervous'},
      {name: 'Reproductive', slug: 'reproductive'},
      {name: 'Respiratory', slug: 'respiratory'},
      {name: 'Immune', slug: 'immune'},
      {name: 'Integumentary', slug: 'integumentary'},
      {name: 'Skeletal', slug: 'skeletal'},
      {name: 'Urinary', slug: 'urinary'},
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


export default Systems;
