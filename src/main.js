/**
 * Created by mykhailo on 30.10.16.
 */
var ReactDOM = require('react-dom');
var React = require('react');

var Routes = require('./Routes.jsx');

ReactDOM.render(Routes,document.querySelector('#react-app'));

module.hot.accept();