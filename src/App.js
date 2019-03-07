import React, { Component } from 'react';
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
        <header>
          <h1>Keller's Awesome Page</h1>
        </header>
        <aside className="sideMenu">
          <ul>
            <li><button>Menu</button></li>
            <li><button>Health</button></li>
            <li><button>Games</button></li>
            <li><button onClick={this.openTab('videos')}>Videos</button></li>
            <li><button>Stories</button></li>
            <li><button>Math</button></li>
            <li><button>Tools</button></li>
            <li><button>Astronomy</button></li>
            <li><button>Quotes</button></li>
            <li><button>Instrumentation</button></li>
            <li><button>Money</button></li>
            <li><button>Spanish</button></li>
            <li><button>Guitar</button></li>
            <li><button>Media lists</button></li>
            <li><button onClick={this.openTab('church')}>Church</button></li>
            <li><button onClick={this.openTab('links')}>Links</button></li>
          </ul>
        </aside>
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
