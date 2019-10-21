import React from 'react';
import './App.css';

// import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SignIn /> */}
      <SignUp />
    </div>
  );
}

export default App;
