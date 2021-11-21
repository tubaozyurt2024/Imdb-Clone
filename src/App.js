import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import ErrorBoundary from "./components/ErrorBoundary";
import  {Add } from "./components/Add";
import withLogger from './components/Logger-hoc'; 
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
          <ErrorBoundary>
            <Add />
          </ErrorBoundary>
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}


export default withLogger(App,"Ayse");