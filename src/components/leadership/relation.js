import React from 'react';
import Trust from './relation/trust.js';
import Conflict from './relation/conflict.js';
import Morale from './relation/morale.js';
import Enpower from './relation/enpower.js';

class Relation extends React.Component {
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
      {name: 'Trust', slug: 'trust', component:<Trust />},
      {name: 'Conflict Resolution', slug: 'conflict', component:<Conflict />},
      {name: 'Morale', slug: 'morale', component:<Morale />},
      {name: 'Enpowerment', slug: 'enpowerment', component:<Enpower /> },


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
          Good relationships help to create a productive environment<br/>
          {renderItems}
        </ul>
        <hr />
        <a href='https://www.youtube.com/watch?v=XWVwFVgA4b4' target='_blank'
        >Jordan Peterson’s guide to leadership</a><br />
        <a href='https://www.youtube.com/watch?v=_v-NfZ1j918' target='_blank'
        >Leaders: Myth & Reality: General Stanley McChrystal</a><br />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Relation;
