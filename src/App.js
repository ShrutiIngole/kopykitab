import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Viewer from './components/viewer/viewer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Viewer />
      </header>
    </div>
  );
}

export default App;
