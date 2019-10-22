import React from 'react';
import './App.css';

// import SignIn from './components/SignIn'
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Card />
      <SignUp />
    </div>
  );
}

export default App;
