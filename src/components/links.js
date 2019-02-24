import React from 'react';

class Links extends React.Component {
  render () {
    const links = [
      { name: 'Interpreter Foundation', url: 'https://www.mormoninterpreter.com/', description: 'smart peeps' },
      { name: 'LDS.org', url: 'https://www.lds.org/?lang=eng', description: 'good peeps' },
      { name: 'Fair Mormon', url: 'https://www.fairmormon.org/', description: 'apologetic peeps' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
      { name: '', url: '', description: '' },
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
        <ul>
          {renderLinks}
        </ul>
      </div>
    );
  }
}

export default Links;
