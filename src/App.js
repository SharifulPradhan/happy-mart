import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserDetails from './components/UserDetails/UserDetails';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div style={{ height: '100vh', margin: '0' }}>
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <PrivateRoute path='/orders'>
            <Orders />
          </PrivateRoute>

          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>

          <Route path='/deals'>
            <Deals />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/user-details'>
            <UserDetails/>
          </PrivateRoute>

          <PrivateRoute path='/check-out/:id'>
            <CheckOut/>
          </PrivateRoute>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
