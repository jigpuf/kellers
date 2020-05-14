import React from 'react'
import Coms from './survival/coms.js'
import Defense from './survival/defense.js'
import Disasters from './survival/disasters.js'
import Energy from './survival/energy.js'
import Fire from './survival/fire.js'
import Aid from './survival/aid.js'
import Food from './survival/food.js'
import Intelligence from './survival/intelligence.js'
import Navigation from './survival/navigation.js'
import Recreation from './survival/recreation.js'
import Shelter from './survival/shelter.js'
import Water from './survival/water.js'
import Hygene from './survival/hygene.js'
import Clothing from './survival/clothing.js'
import Kit from './survival/kit.js'
import Transportation from './survival/transportation.js'
import Community from './survival/community.js'
import Mind from './survival/mind.js'
import Financial from './survival/financial.js'
import Efficiency from './survival/efficiency.js'


class Survival extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render (){
    const Items = [
      {name: 'Communications', slug: 'coms', component:<Coms /> },
      {name: 'Defense', slug: 'defense', component:<Defense /> },
      {name: 'Disasters', slug: 'disaster', component:<Disasters /> },
      {name: 'Energy', slug: 'energy', component:<Energy /> },
      {name: 'Fire', slug: 'fire', component:<Fire /> },
      {name: 'First Aid', slug: 'aid', component:<Aid /> },
      {name: 'Food', slug: 'food', component:<Food />},
      {name: 'Intelligence', slug: 'intelligence', component:<Intelligence />},
      {name: 'Navigation', slug: 'navigation', component:<Navigation /> },
      {name: 'Recreation', slug: 'recreation', component:<Recreation /> },
      {name: 'Shelter', slug: 'shelter', component:<Shelter /> },
      {name: 'Water', slug: 'water', component:<Water />},
      {name: 'hygene', slug: 'hygene', component:<Hygene />},
      {name: 'clothing', slug: 'clothing', component:<Clothing />},
      {name: '72-hour kit', slug: 'kit', component:<Kit />},
      {name: 'Transportation', slug: 'transportation', component:<Transportation />},
      {name: 'Community', slug: 'Community', component:<Community />},
      {name: 'Mind', slug: 'mind', component:<Mind />},
      {name: 'Financial', slug: 'financial', component:<Financial />},
      {name: 'Efficiency', slug: 'efficiency', component:<Efficiency />},
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

export default Survival;
