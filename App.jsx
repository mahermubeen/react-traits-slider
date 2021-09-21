import "./App.css";
import React, { useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";

// redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/:path(|desktop)">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
