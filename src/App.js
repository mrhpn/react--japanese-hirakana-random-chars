import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Learning from './pages/learning/learning';
import Practice1 from './pages/practice1/practice1';

function App() {
  return (
    <React.Fragment>
      <Switch className="z-50">
        <Route path="/practice" component={Practice1} />
        <Route path="/" exact component={Learning} />
      </Switch>

      <div className="fixed top-0 transform translate-y-16 translate-x-16">
        <ul className="list-reset">
          <li className="relative mb-3">
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
            <li className="absolute inline p-1 px-2 mt-0 ml-5 rounded-full cursor-pointer active">
              Hiragana
            </li>
            <li className="absolute inline p-1 px-2 mt-10 ml-5 border rounded-full cursor-pointer">
              Dakuon
            </li>
            <li className="absolute inline p-1 px-2 mt-20 ml-5 border rounded-full cursor-pointer">
              Handakuon
            </li>
            <li className="absolute inline p-1 px-2 mt-32 ml-5 border rounded-full cursor-pointer">
              Yoon
            </li>
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
