var React = require('react');
var events = require('./events');

var ListItem = React.createClass({
  handleClick: function(contact, evt) {
    events.emit('selectContact', contact);
    return false;
  },
  render: function() {
    return (
      <li><a href="#" onClick={this.handleClick.bind(this, this.props.contact)}>
        {this.props.contact.firstName} {this.props.contact.lastName}
      </a></li>
    );
  }
});

var List = React.createClass({
  handleClick: function() {
    console.log(arguments);
  },
  render: function() {
    return (
      <ul>
      {this.props.contacts.map(function(contact) {
        return (
          <ListItem contact={contact}/>
        );
      })}
      </ul>
    );
  }
});

module.exports = List;
