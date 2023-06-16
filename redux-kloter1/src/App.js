import logo from './logo.svg';
import './App.css';

// import Provider from react-redux
import { Provider } from "react-redux";
import store from './redux/store';

import TodoList from './component/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
