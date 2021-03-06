import React from 'react';
import Body from './nouns/body.js';
import Color from './nouns/color.js'

class Nouns extends React.Component {
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
      {name: 'Top 100 Nouns', slug: 'body', component:<Body />},
      {name: 'Color', slug: 'color', color:<Color />},
      {name: 'Nature', slug: 'nature'},
      {name: 'People', slug: 'people'},
      {name: 'Places', slug: 'places'},
      {name: 'Machines', slug: 'machines'},
      {name: 'Time', slug: 'time'},
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


export default Nouns;
