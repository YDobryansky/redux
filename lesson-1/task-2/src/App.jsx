import React, { Component } from 'react';
import Header from './Header';
import { UserContext } from './UserContext';

class App extends Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001'
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userData}>
        <div className="page">
          <Header />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;