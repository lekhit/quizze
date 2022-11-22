import { Route, Switch } from "react-router-dom";
import Login_page from './pages/Login_page'
import Quiz from "./pages/Quiz";
import Leader from "./pages/Leader";

function App(){
  return <div>
    <Switch>
      <Route path='/' exact>
        <Login_page/>
      </Route>
      <Route path='/quiz'>
        <Quiz/>
      </Route>
      <Route path='/admin'>
        <Leader/>
      </Route>
    </Switch>
  </div>
}

export default App;