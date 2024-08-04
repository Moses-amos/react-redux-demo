import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import SUVCounter from './components/SUVCounter';
import HooksCarCounter from './components/HooksCarCounter';
import BuildingsContainer from './components/BuildingsContainer';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
         <BuildingsContainer />
          <HooksCarCounter />
          <SUVCounter />
       </div>
    </Provider>
  );
}

export default App;
