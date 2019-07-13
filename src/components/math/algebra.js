import React from 'react';

class Algebra extends React.Component {
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
      {name: 'Basics', slug: 'basics', },
      {name: 'Simplifying', slug: 'simplify', },
      {name: 'Substitution', slug: 'sustitute', },
      {name: 'Graphing', slug: 'graphing', },
      {name: 'Factoring', slug: 'factoring', },
      {name: 'Advanced equations', slug: 'advanced', },

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
          <a href='https://www.wyzant.com/resources/lessons/math/algebra/lessons-list' target='-blank'
          >Wyzant</a>
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }
export default Algebra;
