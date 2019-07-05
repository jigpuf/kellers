import React from 'react';
import Duties from './power/duties.js'
import Concepts from './power/concepts.js'

class Power extends React.Component {
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
      {name: 'Duties', slug: 'duties'},
      {name: 'Power concepts', slug: 'concepts', component:<Concepts />},
      {name: 'Transformers', slug: 'transformers' },
      {name: 'Switches', slug: 'switches' },
      {name: 'Panels', slug: 'panels' },
      {name: 'Codes', slug: 'codes' },
      {name: 'Tools', slug: 'tools'},

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

export default Power;
