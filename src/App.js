import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact={true} path="/">
        <Dashboard></Dashboard>
     </Route>
     <Route path="/login">
     <Login />
    
// path
     </Route>
     <Route path="*">
       <Error />
     </Route>
     </Switch>

      </Router>
     
    </div>
  );
}

export default App;
