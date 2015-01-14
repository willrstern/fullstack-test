var React = require('react');
var request = require('superagent');
var events = require('./events');
var List = require('./list.jsx');
var Detail = require('./detail.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      contacts: this.props.contacts
    };
  },
  componentWillMount: function() {
    events.on('selectContact', function(contact) {
      this.state.active = contact;
      this.setState(this.state);
    }.bind(this));

  },
  render: function() {
    return (
      <div>
        <List contacts={this.state.contacts} active={this.state.active}/>
        <hr/>
        <Detail contact={this.state.active}/>
      </div>
    );
  }
});

//bootstrap & Init
request.get('/api/contacts', function(res){
  React.render(<App contacts={res.body} />, document.getElementById('app'));
});
