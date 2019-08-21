import React from 'react'
import Timelines from './ot/timelines.js'
import Temple from './ot/temples.js'
import Stories from './ot/stories.js'

class Ot extends React.Component {
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
        {name: 'Temple', slug: 'temple', component:<Temple />},
        {name: 'Timelines', slug: 'timelines', component:<Timelines />},
        {name: 'Stories', slug: 'stories', component:<Stories />},
        {name: 'History', slug: 'history'},
        {name: 'Covenants', slug: 'covenants'}
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
export default Ot;
