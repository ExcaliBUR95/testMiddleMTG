import { Provider } from 'react-redux';
import {store} from './app/store';
import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
      </div>
    </Provider>
  );
};

export default App;
