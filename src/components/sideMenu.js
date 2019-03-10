import React from 'react';


class SideMenu extends React.Component {
  render () {
    const sideMenuItems = [
      { name: 'Menu', slug: 'menu' },
      { name: 'Health', slug: 'health' },
      { name: 'Games', slug: 'games' },
      { name: 'Videos', slug: 'videos' },
      { name: 'Stories', slug: 'stories' },
      { name: 'Math', slug: 'math' },
      { name: 'Tools', slug: 'tools' },
      { name: 'Astronomy', slug: 'astronomy' },
      { name: 'Quotes', slug: 'quotes' },
      { name: 'Instrumentation', slug: 'instrumentation' },
      { name: 'Money', slug: 'money' },
      { name: 'Spanish', slug: 'spanish' },
      { name: 'Media Lists', slug: 'mediaLists' },
      { name: 'Guitar', slug: 'guitar' },
      { name: 'Church', slug: 'church' },
      { name: 'Links', slug: 'links' },
    ];
    const renderSideMenuItems = sideMenuItems.map(item => {
      return (
        <li key={item.slug}>
          <button
            className={this.props.activeTab === item.slug ? 'active' : ''}
            onClick={this.props.openTab(item.slug)}
          >
            {item.name}
          </button>
        </li>
      )
    })
    return (
      <aside className="sideMenu">
        <ul>
          {renderSideMenuItems}
        </ul>
      </aside>
    );
  }
}

export default SideMenu;
