import React from 'react'
import ChurchMedia from './mediaVideos/churchMedia.js'

class Videos extends React.Component {
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
      {name: 'Church', slug: 'church', component:<ChurchMedia />},
      {name: 'History', slug: 'history',},
      {name: 'Stocks', slug: 'stocks',},
      {name: 'Programming', slug: 'programming',},
      {name: 'Survival', slug: 'survival',},
      {name: 'Work', slug: 'work',},
      {name: 'Construction', slug: 'construction',},
      {name: 'Math', slug: 'math',},
      {name: 'Travel', slug: 'travel',},
      {name: 'Astronomy', slug: 'astronomy',},
      {name: 'Health', slug: 'health',},
      {name: 'Mechanics', slug: 'mechanics',},
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
export default Videos;
