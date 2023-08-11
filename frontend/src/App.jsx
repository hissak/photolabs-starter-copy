import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;