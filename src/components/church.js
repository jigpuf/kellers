import React from 'react'
import Bom from './church/bom.js'
import Dc from './church/dc.js'
import Pogp from './church/pogp.js'
import Ot from './church/ot.js'
import Nt from './church/nt.js'
import History from './church/history.js'
import Plan from './church/plan.js'
import Texts from './church/texts.js'
import Talks from './church/talks.js'
import Scriptures from './church/scriptures.js'
import Geneology from './church/geneology.js'
import Symbolism from './church/symbolism.js'
import Comandments from './church/comandments.js'
import Theology from './church/theology.js'
import Prophecy from './church/prophecy.js'
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
      {name: 'BOM', slug: 'bom', component:<Bom />},
      {name: 'D&C', slug: 'dc', component:<Dc />},
      {name: 'POGP', slug: 'pogp', component:<Pogp />},
      {name: 'OT', slug: 'ot', component:<Ot />},
      {name: 'NT', slug: 'nt', component:<Nt />},
      {name: 'Church History', slug: 'church', component:<History/>},
      {name: 'Plan of Salvation', slug: 'plan', component:<Plan />},
      {name: 'Texts', slug: 'texts', component:<Texts />},
      {name: 'Favorite Talks', slug: 'talks', component:<Talks />},
      {name: 'Favorite Scriptures', slug: 'scriptures', component:<Scriptures />},
      {name: 'Geneology', slug: 'geneology', component:<Geneology />},
      {name: 'Symbolism', slug: 'symbolism', component:<Symbolism />},
      {name: 'Comandments', slug: 'comandments', component:<Comandments />},
      {name: 'Theology', slug: 'theology', component:<Theology />},
      {name: 'Prophecy', slug: 'prophecy', component:<Prophecy />},
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
