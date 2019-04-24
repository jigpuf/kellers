import React from 'react';

class Links extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const tier1Items = [
      {name: 'Astronomy', slug: 'astronomy' },
      {name: 'Church', slug: 'church' },
      {name: 'Cooking', slug: 'cooking' },
      {name: 'Electrical', slug: 'electrical' },
      {name: 'Financial', slug: 'financial' },
      {name: 'Games', slug: 'games' },
      {name: 'Health', slug: 'health' },
      {name: 'Math', slug: 'math' },
      {name: 'Mechanical', slug: 'mechanical' },
      {name: 'People Research', slug: 'people' },
      {name: 'Programming', slug: 'programming' },
      {name: 'Survival', slug: 'survival' },
      {name: 'Travel', slug: 'travel' },
      {name: 'Home Repair', slug: 'carpentry' },
    ]
    const renderTier1Items = tier1Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = tier1Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderTier1Items}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
    }



/*
      { name: 'Interpreter Foundation', url: 'https://www.mormoninterpreter.com/', description: 'smart peeps' },
      { name: 'LDS.org', url: 'https://www.lds.org/?lang=eng', description: 'good peeps' },
      { name: 'Fair Mormon', url: 'https://www.fairmormon.org/', description: 'apologetic peeps' },
      { name: 'LDS Books', url: 'https://www.scribd.com/document/57890369/Download-Free-LDS-Books', description: 'LDS Book Downloads' },
      { name: 'Temple Themes', url: 'http://www.templethemes.net/', description: 'Papers and downloadable sources on temple studies' },
      { name: '', url: '', description: '' },
      { name: 'Epicurious', url: 'https://www.epicurious.com/', description: 'Food and recipes' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
      { name: 'W3 Schools', url: 'https://www.w3schools.com/js/js_numbers.asp', description: 'Web Development' },
      { name: '', url: '', description: '' },
      { name: 'Atlas Obscura', url: 'https://www.atlasobscura.com/', description: 'Travel guide to weird places' },
      { name: 'Roadside America', url: 'https://www.roadsideamerica.com/', description: 'Travel Guide to weird places' },
      { name: '', url: '', description: '' },
      { name: 'Public Records', url: 'https://publicrecords.directory/', description: 'Find information on people' },
      { name: 'Family Search', url: 'https://www.familysearch.org/en/', description: 'Research records and family tree' },
      { name: 'True People Search', url: 'https://www.truepeoplesearch.com/', description: 'Find records on people' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
*/

export default Links;
