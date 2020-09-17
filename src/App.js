import React from "react";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import Learning from "./pages/learning/learning";
import Practice1 from "./pages/practice1/practice1";

function App() {
  return (
    <React.Fragment>
      <Switch className="z-50">
        <Route path="/practice" component={Practice1} />
        <Route path="/" exact component={Learning} />
      </Switch>

      <div className="fixed top-0 transform translate-y-16 translate-x-16">
        <ul className="list-reset">
          <li className="mb-3">
            <NavLink
              to="/"
              exact
              className="inline-block p-2 tracking-wider font-serif"
            >
              <ion-icon
                class="align-text-bottom"
                name="leaf-outline"
              ></ion-icon>
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/practice"
              className="inline-block p-2 tracking-wider font-serif"
            >
              <ion-icon
                class="align-text-bottom"
                name="walk-outline"
              ></ion-icon>
              Practice
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
