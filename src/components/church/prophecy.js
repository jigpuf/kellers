import React from 'react';
import Scriptural from './prophecy/scriptural.js';
import Talks from './prophecy/conference.js';

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
    const prophecyItems = [
          {name: 'Scriptural', slug: 'scrip', component: <Scriptural />},
          {name: 'Talks', slug: 'talks', component: <Talks />},
          {name: 'Leaders', slug: 'leaders'},
          {name: 'Second Hand', slug: 'second'},
          {name: 'Non-Member', slug: 'nonMember'},
          {name: 'Prophecy Subjects', slug: 'profSub'},
        ]
        const renderProphecyItems = prophecyItems.map(item => {
          return (
            <button
              key={item.slug}
              onClick={this.pickTier2(item.slug)}
              className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
              >{item.name}</button>
          )
        })
        const tier2 = prophecyItems.filter(item => {
          return this.state.tier2 === item.slug;
        });
        const renderTier3Component = tier2[0] && tier2[0].component;
    return (
      <div>
        <ul>
        {renderProphecyItems}
        <hr />
        {renderTier3Component}
        </ul>
      </div>
    );
  }
}

export default Prophecy;
