import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Donation from "./components/Pages/Donation";
import Events from "./components/Pages/Events";
import Login from "./components/Auth/Login";
import Blog from "./components/Pages/Blog";
import Register from "./components/Auth/Register";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/Pages/NotFound";
import PrivateRoute from "./components/Pages/PrivateRoute";
import AllUser from "./components/Admin/AllUser";
import AddEvent from "./components/Admin/AddEvent";

//** Context API */
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/donation" component={Donation} />
            <PrivateRoute path="/events">
              <Events> </Events>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/register/:SingleVolKey">
              <Register> </Register>
            </PrivateRoute>
            <Route exact path="/allUser" component={Admin} />
            <Route exact path="/addEvent" component={AddEvent} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
