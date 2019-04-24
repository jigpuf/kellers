import React from 'react';

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
    const tier1Items = [
      {name: 'Diet', slug: 'diet' },
      {name: 'Stretching', slug: 'stretching' },
      {name: 'Lifting', slug: 'lifting' },
      {name: 'Cardio', slug: 'cardio' },
      {name: 'Hormones', slug: 'hormones' },
      {name: 'Supplements', slug: 'supplements' },
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

export default Health;
