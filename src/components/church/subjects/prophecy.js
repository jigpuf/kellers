import React from 'react'
import Scriptural from './prophecy/scriptural.js'
import Talks from './prophecy/conference.js'
import Second from './prophecy/second.js'
import Subjects from './prophecy/subjects.js'

class Prophecy extends React.Component {
    state = {
    tier2: undefined,
  }
  pickTier2 = (item) => {
    return () => {
      this.setState({tier2:item})
    }
  }
  render () {
    const Items = [
          {name: 'Scriptural', slug: 'scrip', component: <Scriptural />},
          {name: 'Talks', slug: 'talks', component: <Talks />},
          {name: 'Leaders', slug: 'leaders'},
          {name: 'Second Hand', slug: 'second', component: <Second />},
          {name: 'Non-Member', slug: 'nonMember'},
          {name: 'Prophecy Subjects', slug: 'profSub', component:<Subjects />},
          {name: 'Gathering of Israel', slug: 'gathering'},
          {name: 'Zion', slug: 'zion'},
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

export default Prophecy;
