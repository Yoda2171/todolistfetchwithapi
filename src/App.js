import React from "react"
import List from './Component/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
    <div className="container">
            <h1 className="text-center">Todo.List</h1>
            <List />
        </div>
    </>
  );
}

export default App;
