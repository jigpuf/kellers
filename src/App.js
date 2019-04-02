import React from 'react';
import './App.css';
import SideMenu from './components/sideMenu';
import MainSection from './components/mainSection';
class App extends React.Component {
  state = {
    activeTab: undefined,
  }
  openTab = (tab) => {
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
        <SideMenu openTab={this.openTab} activeTab={activeTab} />
        <MainSection activeTab2={activeTab} />
      </div>
    );
  }
}

export default App;
