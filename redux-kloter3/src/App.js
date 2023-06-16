import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';

import store from './redux/store';
import TodoList from './components/TodoList';
import AddTodoForm from './components/CreateTodo';

function App() {
  return (
    <Provider store={store}>
      <AddTodoForm />
    <div className="App">
      React Redux
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
