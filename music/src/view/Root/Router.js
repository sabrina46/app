import React from 'react';
import App from '../../App';
import Recommend from '../recommendation';
import Search from '../home/Search'
import Login from '../Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const BasicRouter = () => (
    <Router>
      <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/Recommend" component={App}></Route>
      <Route path="/Recommend" component={Recommend}></Route>
      <Route path="/Search" component={Search}></Route>
      </Switch>
    </Router>
)
export default BasicRouter;