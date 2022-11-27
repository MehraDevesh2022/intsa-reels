import { render } from "@testing-library/react";
import React, { Component, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Feed from "./component/Feed";
import Login from "./component/Login";
import PageNotFound from "./component/PageNotFound";
import Profile from "./component/Profile";
import SignUp from "./component/SignUp";
import { AuthContextProvider, AuthContext } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        {/* this is how to we use Route passing the path and component inside of it */}
        {/* this is one of the way to right route component where path is props and login is component */}
        {/* but there is another version also to right route when we need to add some logic with route */}
        {/* <Route path='/feed' render={(props) =>{
          return <Feed></Feed>
         }}></Route> */}
        {/* this is how to another way we have option to right Route where we have render method and render take props as a parameter and we have option to write logic inside return */}
        <Route path="/login"> <Login></Login></Route>
        <Route path="/signup"><SignUp></SignUp></Route>
        {/* we need to add some logic inside profile path and feed path as well so we making our own PrivateRoute component for that */}
        {/* here inside of PrivateRoute component we passing <Profile></Profile> component and path as props  */}
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/" component={Feed} />
        <Route><PageNotFound></PageNotFound></Route>
      </Switch>

    </AuthContextProvider>
  );
}
// this Component(PrivateRoute) checks if cUser logged in then Redirect Feed / Profile Component else render into Login page
function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext)
  return (
    <Route {...rest} render={props => {
      return user ? <Component {...props} /> : <Redirect to="login" />
    }} />
  )
}



export default App;
