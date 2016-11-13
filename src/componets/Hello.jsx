/**
 * Created by mykhailo on 30.10.16.
 */
var React = require('react');

var Hello = React.createClass({
   render:function(){
       return(<p>Hello, {this.props.name}!</p>)
   }
});

module.exports = Hello;