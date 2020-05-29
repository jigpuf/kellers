import React from 'react';
import Author from './quotes/author.js';
import Subject from './quotes/subject.js';
import MovieQuotes from './quotes/movieQuotes.js';
import ReadMe from './quotes/readMe.js';

class Quotes extends React.Component {
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
      {name: 'Author', slug: 'author', component:<Author />},
      {name: 'Subject', slug: 'subject', component:<Subject /> },
      {name: 'Movie Quotes', slug: 'movies', component:<MovieQuotes />},
      {name: 'Read Me', slug: 'readme', component:<ReadMe />},
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

export default Quotes;
