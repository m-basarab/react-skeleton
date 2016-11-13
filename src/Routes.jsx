var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Hello = require('./componets/Hello.jsx');
var Heder = require('./componets/Heder.jsx');

//var Routes = (
//    <Router history={hashHistory}>
//        <Route path='/' component={Heder}>
//            <Route path='/home' component={Hello} />
//        </Route>
//    </Router>
//);

var Routes = (
    <Heder/>
);

module.exports = Routes;