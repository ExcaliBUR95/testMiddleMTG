import { Provider } from 'react-redux';
import {store} from './app/store';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
