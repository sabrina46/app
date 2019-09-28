import React from 'react';
import App from '../../App';
import Detail from '../home/Recommend';
import Search from '../home/Search'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const BasicRouter = () => (
    <Router>
      <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Route path="/Search" component={Search}></Route>
      </Switch>
    </Router>
)
export default BasicRouter;