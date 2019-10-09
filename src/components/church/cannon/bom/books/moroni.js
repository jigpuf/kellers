import React from 'react';

class Moroni extends React.Component {
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
        {name: 'Overview', slug: 'overview',},
        {name: '1', slug:'1',},
        {name: '2', slug:'2',},
        {name: '3', slug:'3',},
        {name: '4', slug:'4',},
        {name: '5', slug:'5',},
        {name: '6', slug:'6',},
        {name: '7', slug:'7',},
        {name: '8', slug:'8',},
        {name: '9', slug:'9',},
        {name: '10', slug:'10',},
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

export default Moroni;
