import React from 'react'
import Vitamins from './nutrition/vitamins.js'
import Minerals from './nutrition/minerals.js'
import Amino from './nutrition/amino.js'
import Compounds from './nutrition/compounds.js'


class Nutrition extends React.Component {
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
      {name: 'Vitamins', slug: 'vitamins', component:<Vitamins /> },
      {name: 'Minerals', slug: 'minerals', component:<Minerals /> },
      {name: 'Amino Acids', slug: 'amino', component:<Amino /> },
      {name: 'Compounds', slug: 'compounds', component:<Compounds /> },
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
export default Nutrition;
