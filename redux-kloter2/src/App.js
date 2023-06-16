import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import store from './redux/store';
import TodoList from './components/TodoList';
import AddToForm from './components/CreateTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux</h1>
        <AddToForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
