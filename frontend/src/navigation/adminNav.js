import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import User from '../pages/admin/users'
import Category from '../pages/admin/category'

export default function App() {
  return (
        <Switch>
          <Route  path="/admin/users">
            <User />
          </Route>
          <Route path="/admin/category">
            <Category />
          </Route>
        </Switch>
  );
}