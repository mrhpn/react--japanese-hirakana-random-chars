import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Learning from './pages/learning/learning';
import Practice1 from './pages/practice1/practice1';

function App() {
  return (
    <React.Fragment>
      <Switch className="z-50">
        <Route path="/learn" component={Learning} />
        <Route path="/practice" component={Practice1} />
      </Switch>

      <div
        className="fixed top-0 transform translate-y-16 translate-x-16"
        style={{ zIndex: 999 }}
      >
        <ul className="list-reset">
          <li className="mb-3">
            <NavLink to="/learn" className="inline-block p-2 font-bold ">
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to="/practice" className="inline-block p-2 font-bold ">
              Practice
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
