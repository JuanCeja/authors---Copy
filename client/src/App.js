import './App.css';
import Main from './components/Main';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/create/author">
          <Form />
        </Route>
        <Route exact path="/edit/author/:id">
          <UpdateForm />
        </Route>
        
      </Switch>

    </div>
  );
}

export default App;
