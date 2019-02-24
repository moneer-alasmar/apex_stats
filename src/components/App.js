import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Player from "./Player";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div className="App">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/player" exact component={Player} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
