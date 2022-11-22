import { Route, Switch } from "react-router-dom";
import Login_page from './pages/Login_page'
import Quiz from "./pages/Quiz";

function App(){
  return <div>
    <Switch>
      <Route path='/' exact>
        <Login_page/>
      </Route>
      <Route path='/quiz'>
        <Quiz/>
      </Route>
    </Switch>
  </div>
}

export default App;