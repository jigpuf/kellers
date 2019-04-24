import React from 'react';

class Astronomy extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const tier1Items = [
      {name: 'Soltices', slug: 'soltices' },
      {name: 'Equinoxes', slug: 'eqinoxes' },
      {name: 'Sirius', slug: 'sirius' },
      {name: 'Constallations', slug: 'constalations' },
      {name: 'Seasons', slug: 'seasons' },
      {name: 'Polaris', slug: 'polaris'},
      {name: 'Electric Universe', slug: 'electric' },
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
    );
  }
}

export default Astronomy;
