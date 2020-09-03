import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

function Index() {
    return (
       <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/add" component={Add}/>
              <Route path="/:id/edit" component={Edit}/>
          </Switch>
       </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
