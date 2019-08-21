import React from 'react';
import Bom01Overview from './nephi1/bom01Overview.js'
import Bom0101 from './nephi1/bom01Chapters.js'
import Bom0102 from './nephi1/bom01Chapters.js'
import Bom0103 from './nephi1/bom01Chapters.js'
import Bom0104 from './nephi1/bom01Chapters.js'
import Bom0105 from './nephi1/bom01Chapters.js'
import Bom0106 from './nephi1/bom01Chapters.js'
import Bom0107 from './nephi1/bom01Chapters.js'

class Nephi1 extends React.Component {
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
        {name: 'Overview', slug: 'overview', component:<Bom01Overview />},
        {name: '1', slug:'a', component:<Bom0101 />},
        {name: '2', slug:'b', component:<Bom0102 />},
        {name: '3', slug:'c', component:<Bom0103 />},
        {name: '4', slug:'d', component:<Bom0104 />},
        {name: '5', slug:'e', component:<Bom0105 />},
        {name: '6', slug:'f', component:<Bom0106 />},
        {name: '7', slug:'g', component:<Bom0107 />},
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

export default Nephi1;
