import React from 'react'
import Justify from './subjects/justify.js'
import Evolution from './subjects/evolution.js'
import Theosis from './subjects/theosis.js'
import Redux from './subjects/redux.js'
import Temple from './subjects/temple.js'
import Relationship from './subjects/relationship.js'
import Ordinances from './subjects/ordinances.js'
import Are from './subjects/are.js'
import Covenant from './subjects/covenant.js'
import Money from './subjects/money.js'
import Promised from './subjects/promised.js'
import Power from './subjects/power.js'

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
      {name: 'Ordinances', slug: 'ordinances', component:<Ordinances />},
      {name: 'Temple', slug: 'temple', component:<Temple />},
      {name: 'Sermons', slug: 'sermons'},
      {name: 'Pre-mortal Existance', slug: 'pre-mortal'},
      {name: 'Escotology', slug: 'escotology'},
      {name: 'Christology', slug: 'christology'},
      {name: 'Creation and Fall', slug: 'creation'},
      {name: 'Gathering of Israel', slug: 'gathering'},
      {name: 'Zion', slug: 'zion'},
      {name: 'Visions', slug: 'visions'},
      {name: 'Cosmology', slug: 'cosmology'},
      {name: 'Soteriology', slug: 'soteriology'},
      {name: 'Agency', slug: 'agency'},
      {name: 'Ecclesiology', slug: 'ecclesiology'},
      {name: 'Pneumatology', slug: 'pneumatology'},
      {name: 'Angels', slug: 'angels'},
      {name: 'Theological Development', slug: 'development'},
      {name: 'Conversion', slug: 'conversion'},
      {name: 'Covenant Path', slug: 'covenant', component:<Covenant />},
      {name: 'Relationships', slug: 'relationships', component:<Relationship />},
      {name: 'Justification/Sanctification', slug: 'justify', component:<Justify />},
      {name: 'Evolution', slug: 'evolution', component:<Evolution />},
      {name: 'Theosis', slug: 'theosis', component:<Theosis />},
      {name: 'Redux Scripture', slug: 'bible', component:<Redux />},
      {name: 'What things are', slug: 'are', component:<Are />},
      {name: 'Money', slug: 'money', component: <Money />},
      {name: 'Promised Land covenant', slug: 'promised', component:<Promised />},
      {name: 'Mormons Christian?', slug: 'mormonChristian'},
      {name: 'Power', slug: 'power', component:<Power />},
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
