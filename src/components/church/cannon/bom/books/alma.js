import React from 'react';
import BOM0913 from './alma/bom0913.js'
class Alma extends React.Component {
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
        {name: 'Overview', slug: 'overview',},
        {name: '1', slug:'1',},
        {name: '2', slug:'2',},
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
        {name: '13', slug:'13', component:<BOM0913 />},
        {name: '14', slug:'14',},
        {name: '15', slug:'15',},
        {name: '16', slug:'16',},
        {name: '17', slug:'17',},
        {name: '18', slug:'18',},
        {name: '19', slug:'19',},
        {name: '20', slug:'20',},
        {name: '21', slug:'21',},
        {name: '22', slug:'22',},
        {name: '23', slug:'23',},
        {name: '24', slug:'24',},
        {name: '25', slug:'25',},
        {name: '26', slug:'26',},
        {name: '27', slug:'27',},
        {name: '28', slug:'28',},
        {name: '29', slug:'29',},
        {name: '30', slug:'30',},
        {name: '31', slug:'31',},
        {name: '32', slug:'32',},
        {name: '33', slug:'33',},
        {name: '34', slug:'34',},
        {name: '35', slug:'35',},
        {name: '36', slug:'36',},
        {name: '37', slug:'37',},
        {name: '38', slug:'38',},
        {name: '39', slug:'39',},
        {name: '40', slug:'40',},
        {name: '41', slug:'41',},
        {name: '42', slug:'42',},
        {name: '43', slug:'43',},
        {name: '44', slug:'44',},
        {name: '45', slug:'45',},
        {name: '46', slug:'46',},
        {name: '47', slug:'47',},
        {name: '48', slug:'48',},
        {name: '49', slug:'49',},
        {name: '50', slug:'50',},
        {name: '51', slug:'51',},
        {name: '52', slug:'52',},
        {name: '52', slug:'53',},
        {name: '54', slug:'54',},
        {name: '55', slug:'55',},
        {name: '56', slug:'56',},
        {name: '57', slug:'57',},
        {name: '58', slug:'58',},
        {name: '59', slug:'59',},
        {name: '60', slug:'60',},
        {name: '61', slug:'61',},
        {name: '62', slug:'62',},
        {name: '63', slug:'63',},

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

export default Alma;
