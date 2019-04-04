import React from 'react';

class Links extends React.Component {
  render () {
    const links = [
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
    ];
    const renderLinks = links.map((link, index) => {
      return (


          <li key={index}>
            <a target="_blank" href={link.url}>{link.name}</a>
            <div className="description">{link.description}</div>
          </li>
      )
    })
    return (
      <div>
      <div id="linksTier1">
        <button className="tier1">Travel</button>
        <button className="tier1">Church</button>
        <button className="tier1">People Research</button>
        <button className="tier1">Cooking</button>
        <button className="tier1">Programming</button>
        <button className="tier1">Mechanical</button>
        <button className="tier1">Electrical</button>
        <button className="tier1">Networking</button>
        <button className="tier1">Financial</button>
        <hr />
      </div>
      <div id="linksTier2"></div>
      <div id="linksTier3"></div>
        <ul>
          {renderLinks}
        </ul>
      </div>
    );
  }
}

export default Links;
