import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TvInfo from "./TvInfo"
import Home from "./components/header/Home"
import MovieInfo from "./MovieInfo"
import "./style.css"
import Error from "./components/header/Error"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:movie_id" component={MovieInfo} />
            <Route exact path="/tv/:movie_id" component={TvInfo} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
