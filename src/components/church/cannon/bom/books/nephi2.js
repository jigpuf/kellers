import React from 'react';

class Nephi2 extends React.Component {
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

export default Nephi2;
