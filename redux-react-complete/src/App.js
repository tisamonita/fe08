import logo from './logo.svg';
import './App.css';
// import Provider from react-redux
import { Provider } from "react-redux";

// import store
import store from "./redux/store";

// import TodoList component
import TodoList from "./components/TodoList";
// import AddTodoForm component
import AddTodoForm from "./components/AddForm";
//import UserList component
import UserList from "./components/userList";

function App() {
  
  return (
    <Provider store={store} >
      <div>
        <UserList />
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
