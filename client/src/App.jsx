import React from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import Login from "./pages/login"
import Register from "./pages/register"
import Index from "./pages/index"
import { GRADIENT_BG } from "./constants/tailwind.constant"
import Navbar from "./components/common/Navbar"

const App = () => {
  const history = createBrowserHistory()
  return (
      <Router history={history}>
        <div className={GRADIENT_BG}>
          <Navbar/>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register} />
            <Route path="/" component={Index} />
          </Switch>
        </div>
      </Router>
  )
}

export default App
