import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './CSS/index.css';
import App from './App';
import AboutMe from './AboutMe'
import * as serviceWorker from './serviceWorker';
import Notfound from './notfound';
import Skills from './skills';
import Contact from './contact';

const routing = (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path='/skills' component={Skills} />
            <Route path='/contact' component={Contact} />
            <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
