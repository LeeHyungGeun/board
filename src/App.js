import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import BoardContainer from './containers/BoardContainer';
import BoardCreateContainer from './containers/BoardCreateContainer';

function App() {
  return (
    <div>
      <Route exact path="/" component={BoardContainer} />
      <Route exact path="/create" component={BoardCreateContainer} />
    </div>
  );
}

export default App;
