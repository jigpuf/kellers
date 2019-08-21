import React from 'react'
import Cannon from './church/cannon.js'
import History from './church/history.js'
import Texts from './church/texts.js'
import Talks from './church/talks.js'
import Geneology from './church/geneology.js'
import Subject from './church/subject.js'

class Church extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {

    const Items = [
      {name: 'Cannon', slug: 'cannon', component:<Cannon />},
      {name: 'Church History', slug: 'church', component:<History/>},
      {name: 'Other Texts', slug: 'texts', component:<Texts />},
      {name: 'Favorite Talks', slug: 'talks', component:<Talks />},
      {name: 'Geneology', slug: 'geneology', component:<Geneology />},
      {name: 'Subjects', slug: 'subjects', component:<Subject />},
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
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Church;
