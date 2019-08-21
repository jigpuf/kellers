import React from 'react'
import Geography from './bom/geography.js'
import Lectures from './bom/lectures.js'
import Complexity from './bom/complexity.js'
import Books from './bom/books.js'

class BOM extends React.Component {
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
          {name: 'Books', slug: 'books', component:<Books />},
          {name: 'Geography', slug: 'geography', component: <Geography />},
          {name: 'Lectures', slug: 'lectures', component: <Lectures />},
          {name: 'Complexity', slug: 'complexity', component: <Complexity />}
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

export default BOM;
