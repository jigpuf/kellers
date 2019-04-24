import React from 'react';
import Pogp from './church/pogp.js';
import Bom from './church/bom.js';
import Prophecy from './church/prophecy.js';
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
/*
    const dcItems = [
      {name: 'Escatology', slug: 'escatology'},
      {name: 'Government', slug: 'government'},
      {name: 'Scripture Commentary', slug: 'scripCom'},
      {name: 'Church Government', slug: 'churchGov'},
    ]
    const otItems = [
      {name: 'Story', slug: 'story'},
      {name: 'Temple', slug: 'Temple'},
      {name: 'Wisdom', slug: 'wisdom'},
      {name: 'Symbolism', slug: 'symbolism'},
    ]
    const symbolismItems = [
      {name: 'Shapes & Numbers', slug: 'shapes'},
      {name: 'Colors', slug: 'colors'},
      {name: 'Astronomy', slug: 'astronomy'},
      {name: 'Items', slug: 'items'},
    ]
    const textsItems = [
      {name: 'Pseudopigraphy', slug: 'pseudo'},
      {name: 'Church History', slug: 'churchHistory'},
      {name: 'Journals', slug: 'journals'},
      {name: 'Doctrinal Writings', slug: 'docWrite'},
      {name: 'Church Fathers', slug: 'churchFathers'},
    ]
    const subjectsItems = [
      {name: 'Priesthood', slug: 'priesthood'},
      {name: 'Faith', slug: 'faith'},
      {name: 'Repentance', slug: 'repentance'},
      {name: 'Ordinances', slug: 'ordinances'},
      {name: 'Temple', slug: 'temple'},
      {name: 'Sermons', slug: 'sermons'},
      {name: 'Pre-mortal Existance', slug: 'pre-mortal'},
      {name: 'Escotology', slug: 'escotology'},
      {name: 'Atonement', slug: 'atonement'},
      {name: 'Creation and Fall', slug: 'creation'},
      {name: 'Visions', slug: 'visions'},
    ]*/
    const churchItems = [
      {name: 'BOM', slug: 'bom', component:<Bom />},
      {name: 'D&C', slug: 'dc'},
      {name: 'POGP', slug: 'pogp', component:<Pogp />},
      {name: 'OT', slug: 'ot'},
      {name: 'NT', slug: 'nt'},
      {name: 'Symbolism', slug: 'symbolism'},
      {name: 'Texts', slug: 'texts'},
      {name: 'Prophecy', slug: 'prophecy', component:<Prophecy />},
      {name: 'Subjects', slug: 'subjects'},
    ]
    const renderChurchItems = churchItems.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
          >{item.name}</button>
      )
    })
    const tier1 = churchItems.filter(item => {
      return this.state.tier1 === item.slug;
    });
        const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
      <ul>
        {renderChurchItems}
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Church;
