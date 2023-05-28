import React from 'react';
import User from './components/User';
import UserInfo from './components/UserInfo';
// import './App.css';

class App extends React.Component {
  render() {
    
  
    return (
      <>
        <User />
        <hr/>
      <UserInfo/>
      </>
      
    );
  }
}

export default App;
