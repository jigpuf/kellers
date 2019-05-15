import React from 'react';
import Movies from './mediaLists/movies.js';


class MediaLists extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const tier1Items = [
      {name: 'Music', slug: 'music' },
      {name: 'Movies', slug: 'movies', component:<Movies />},
      {name: 'Books', slug: 'books' },
      {name: 'TV Shows', slug: 'tv' },
      {name: 'Video Games', slug: 'vg' },
      {name: 'Board Games', slug: 'bg' },
    ]
    const renderTier1Items = tier1Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = tier1Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderTier1Items}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default MediaLists;
