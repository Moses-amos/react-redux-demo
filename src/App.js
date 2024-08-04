import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import LamborghiniCounter from './components/LamborghiniCounter';
import HooksCarCounter from './components/HooksCarCounter';
import BuildingsContainer from './components/BuildingsContainer';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
         <BuildingsContainer />
          <HooksCarCounter />
          <LamborghiniCounter />
       </div>
    </Provider>
  );
}

export default App;
