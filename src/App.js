import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace/NewPlace';
import UserPlaces from './places/pages/UserPlaces/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import Users from './user/pages/Users/Users';
import Updateplace from './places/pages/UpdatePlace/UpdatePlace';
import Auth from './user/pages/Auth/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>

            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>

            <Route path="/places/new" exact>
              <NewPlace />
            </Route>

            <Route path="/places/:placeId" exact>
              <Updateplace />
            </Route>

            <Route path="/auth" exact>
              <Auth />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
