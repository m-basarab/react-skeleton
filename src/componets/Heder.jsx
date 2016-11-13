var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Heder = React.createClass({
    render:function(){
        return(
            <div>
                <Link to='/home'>Go Home </Link>
                <br/>
                <Link to='/'>Back to main Page</Link>
                <h1>My First using react-router</h1>
                {this.props.children}
            </div>)
    }
});

module.exports = Heder;