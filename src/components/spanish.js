import React from 'react'
import Pronunciation from './spanish/pronunciation.js'
import Nouns from './spanish/nouns.js'
import Verbs from './spanish/verbs.js'
import Adjective from './spanish/adjectives.js'

class Spanish extends React.Component {
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
      {name: 'Pronunciation', slug: 'pronunciation', component:<Pronunciation />},
      {name: 'Nouns', slug: 'nouns',component:<Nouns />},
      {name: 'Verbs', slug: 'verbs', component:<Verbs /> },
      {name: 'Adjectives', slug: 'adjectives', component:<Adjective /> },
      {name: 'Adverbs', slug: 'adverbs' },
      {name: 'Prepositions', slug: 'prepositions' },
      {name: 'Pronouns', slug: 'pronouns' },
      {name: 'Numbers', slug: 'numbers' },
      {name: 'Vocabulary', slug: 'vocabulary' },
      {name: 'Finer Points', slug: 'finer' },
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

export default Spanish;
