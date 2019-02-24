import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Links from './components/links';
import Church from './components/church';
import Videos from './components/videos';

class App extends Component {
  state = {
    activeTab: undefined,
  }
  openTab (tab) {
    return () => {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    const activeTab = this.state.activeTab;
    return (
      <div className="App">
        <h1>Keller's Awesome Page</h1>
        <div className="sideMenu">
          <ul>
            <li>Menu</li>
            <li>Healths</li>
            <li>Games</li>
            <li onClick={this.openTab('videos')}>Videos</li>
            <li>Stories</li>
            <li>Maths</li>
            <li>Tools</li>
            <li onClick={this.openTab('church')}>Church</li>
            <li onClick={this.openTab('links')}>Links</li>
          </ul>
        </div>
        <div className="mainSection">
          {activeTab === 'links' && <Links />}
          {activeTab === 'church' && <Church />}
          {activeTab === 'videos' && <Videos />}


        </div>
      </div>
    );
  }
}

export default App;
