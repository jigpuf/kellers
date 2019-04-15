import React from 'react';
import Movies from './videos/movies.js';

class Videos extends React.Component {
    state = {
      tier1: undefined,
    }
    pickTier1  = (item) => {
      return () => {
        this.setState({tier1:item})
      }
    }

  render () {
    const videosItems = [
      {name: 'Movies', slug: 'movies', component: <Movies />},
      {name: 'Music', slug: 'music' },
      {name: 'Funny', slug: 'funny' },
      {name: 'Programming', slug: 'programming' },
      {name: 'Church', slug: 'church' },
      {name: 'Mechanical', slug: 'mechanical' },
      {name: 'Electrical', slug: 'electrical' },
    ]
    const renderVideosItems = videosItems.map(item => {
      return(
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = videosItems.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderVideosItems}
        </ul>
        <hr />
          {renderTier2Component}
      </div>
    )
  }
}

export default Videos;
