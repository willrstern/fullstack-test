var React = require('react');

var Detail = React.createClass({
  render: function() {
    if (this.props.contact) {
      return (
        <div>
          <h2>Basic Info</h2>
          <p><strong>First Name:</strong> {this.props.contact.firstName}</p>
          <p><strong>Last Name:</strong> {this.props.contact.lastName}</p>
          ...and more detail
        </div>
      );
    } else {
      return (
        <h4>Select a contact</h4>
      )
    }
  }
});

module.exports = Detail;
