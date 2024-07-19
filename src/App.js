import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : currentForm === 'register' ? (
        <Register onFormSwitch={toggleForm} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;


