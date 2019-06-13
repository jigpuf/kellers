import React from 'react';
import Justify from './subjects/justify.js';
import Evolution from './subjects/evolution.js';
import Theosis from './subjects/theosis.js';
import Atonement from './subjects/atonement.js';

class Subject extends React.Component {
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
      {name: 'Priesthood', slug: 'priesthood'},
      {name: 'Comandments', slug: 'comandments'},
      {name: 'Faith', slug: 'faith'},
      {name: 'Repentance', slug: 'repentance'},
      {name: 'Ordinances', slug: 'ordinances'},
      {name: 'Temple', slug: 'temple'},
      {name: 'Sermons', slug: 'sermons'},
      {name: 'Pre-mortal Existance', slug: 'pre-mortal'},
      {name: 'Escotology', slug: 'escotology'},
      {name: 'Christology', slug: 'christology'},
      {name: 'Atonement', slug: 'atonement', component:<Atonement />},
      {name: 'Creation and Fall', slug: 'creation'},
      {name: 'Gathering of Israel', slug: 'gathering'},
      {name: 'Zion', slug: 'zion'},
      {name: 'Visions', slug: 'visions'},
      {name: 'Cosmology', slug: 'cosmology'},
      {name: 'Justification/Sanctification', slug: 'justify', component:<Justify />},
      {name: 'Evolution', slug: 'evolution', component:<Evolution />},
      {name: 'Theosis', slug: 'theosis', component:<Theosis />},
      {name: 'Redux Bible', slug: 'bible'},
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

export default Subject;


/*
*/
