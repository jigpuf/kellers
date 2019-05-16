import React from 'react';

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
      {name: 'Pronunciation', slug: 'pronunciation' },
      {name: 'Nouns', slug: 'nouns' },
      {name: 'Verbs', slug: 'verbs' },
      {name: 'Adjectives', slug: 'adjectives' },
      {name: 'Adverbs', slug: 'adverbs' },
      {name: 'Prepositions', slug: 'prepositions' },
      {name: 'Object Pronouns', slug: 'objects' },
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
