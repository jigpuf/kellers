import React from 'react'
import Pronunciation from './spanish/pronunciation.js'
import Nouns from './spanish/nouns.js'
import Verbs from './spanish/verbs.js'
import Adjective from './spanish/adjectives.js'
import Adverbs from './spanish/adverbs.js'
import Prepositions from './spanish/prepositions.js'
import Pronouns from './spanish/pronouns.js'
import Numbers from './spanish/numbers.js'
import Vocabulary from './spanish/vocabulary.js'
import Finer from './spanish/finer.js'

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
      {name: 'Adverbs', slug: 'adverbs', component:<Adverbs /> },
      {name: 'Prepositions', slug: 'prepositions', component:<Prepositions /> },
      {name: 'Pronouns', slug: 'pronouns', component:<Pronouns /> },
      {name: 'Numbers', slug: 'numbers', component:<Numbers /> },
      {name: 'Vocabulary', slug: 'vocabulary', component:<Vocabulary /> },
      {name: 'Finer Points', slug: 'finer', component:<Finer /> },
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
