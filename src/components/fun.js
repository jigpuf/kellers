import React from 'react';
import Table from './fun/table.js'
import Sports from './fun/sports.js'
import Movies from './fun/movies.js'
import Shopping from './fun/shopping.js'
import Education from './fun/education.js'

class Paintball extends React.Component {
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
      {name: 'Sports', slug: 'sports', component:<Sports /> },
      {name: 'Table Games', slug: 'table', component:<Table /> },
      {name: 'Video Games', slug: 'video' },
      {name: 'Movies', slug: 'movies', component:<Movies />},
      {name: 'Shopping', slug: 'Shopping', component:<Shopping /> },
      {name: 'Food', slug: 'food' },
      {name: 'Education', slug: 'education', component:<Education /> },
      {name: 'Travel', slug: 'travel' },
      {name: 'Bucket List', slug: 'bucket' },
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
export default Paintball;
