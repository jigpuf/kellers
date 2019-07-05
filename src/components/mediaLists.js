import React from 'react';
import Music from './mediaLists/music.js';
import Movies from './mediaLists/movies.js';
import Books from './mediaLists/books.js';
import Tv from './mediaLists/tv.js';
import Vg from './mediaLists/vg.js';
import Bg from './mediaLists/bg.js';
import Apps from './mediaLists/apps.js'


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
    const Items = [
      {name: 'Board Games', slug: 'bg', component:<Bg /> },
      {name: 'Books', slug: 'books', component:<Books /> },
      {name: 'Music', slug: 'music', component:<Music />},
      {name: 'Movies', slug: 'movies', component:<Movies />},
      {name: 'TV Shows', slug: 'tv', component:<Tv /> },
      {name: 'Video Games', slug: 'vg', component:<Vg /> },
      {name: 'Apps', slug: 'apps', component:<Apps /> },
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

export default MediaLists;
