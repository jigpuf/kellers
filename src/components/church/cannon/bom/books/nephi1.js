import React from 'react';
import Bom01Overview from './nephi1/bom01Overview.js'
import Bom0101 from './nephi1/bom0101.js'
import Bom0102 from './nephi1/bom0102.js'


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
        {name: '1', slug:'1', component:<Bom0101 />},
        {name: '2', slug:'2', component:<Bom0102 />},
        {name: '3', slug:'3',},
        {name: '4', slug:'4',},
        {name: '5', slug:'5',},
        {name: '6', slug:'6',},
        {name: '7', slug:'7',},
        {name: '8', slug:'8',},
        {name: '9', slug:'9',},
        {name: '10', slug:'10',},
        {name: '11', slug:'11',},
        {name: '12', slug:'12',},
        {name: '13', slug:'13',},
        {name: '14', slug:'14',},
        {name: '15', slug:'15',},
        {name: '16', slug:'16',},
        {name: '17', slug:'17',},
        {name: '18', slug:'18',},
        {name: '19', slug:'19',},
        {name: '20', slug:'20',},
        {name: '21', slug:'21',},
        {name: '22', slug:'22',},
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
