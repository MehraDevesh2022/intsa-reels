import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "./component/Feed";
import Login from "./component/Login";
import PageNotFound from "./component/PageNotFound";
import Profile from "./component/Profile";
import SignUp from "./component/SignUp";

function App() {
  return (
    <Switch>
      <Route path="/login"> <Login></Login></Route>
      <Route path="/signup"><SignUp></SignUp></Route>
      <Route path="/profile">  <Profile></Profile></Route>
      <Route path="/Feed"><Feed></Feed></Route>
      <Route><PageNotFound></PageNotFound></Route>
    </Switch>
  );
}

export default App;