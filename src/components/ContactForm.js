import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a contact form using Formspree.
 */
class ContactForm extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      error: '',
    };
  }

  /**
   * Sets the form field in the component state.
   * @param {string} fieldName - The name of the field being set.
   * @param {string} newValue  - The value of the field being set.
   * @returns {undefined}
   */
  setField(fieldName, newValue) {
    this.setState({
      data: Object.assign({}, this.state.data, {
        [fieldName]: newValue,
      }),
    });
  }

  /**
   * Handles form submission and input validation.
   * @param {object} event - The submit event object.
   * @returns {undefined}
   */
  handleFormSubmit(event) {
    event.preventDefault();
    if (!this.state.data.name) {
      this.setState({error: 'Name is required'});
    } else if (!this.state.data.email) {
      this.setState({error: 'Email address is required'});
    } else if (!this.state.data.message) {
      this.setState({error: 'You must enter a message'});
    } else {
      // If there's no validation errors the form will be submitted.
      this.refs['form'].submit();
    }
  }

  /**
   * Renders the ContactForm component.
   * @returns {string} - Returns JSX representation of the ContactForm component.
   */
  render() {
    const {email} = this.props;

    return (
      <Fragment>
        <form
          className="row"
          ref="form"
          action={`https://formspree.io/${email}`}
          method="POST"
        >
          <label htmlFor="name" className="small-2 extra-small-12">
            Name
          </label>
          <div className="small-10 extra-small-12">
            <input
              type="text"
              name="name"
              placeholder="Name..."
              value={this.state.data.name || ''}
              onChange={(event) => this.setField('name', event.target.value)}
            />
          </div>

          <label htmlFor="_replyto" className="small-2 extra-small-12">
            Email
          </label>
          <div className="small-10 extra-small-12">
            <input
              type="email"
              name="_replyto"
              placeholder="Email..."
              value={this.state.data.email || ''}
              onChange={(event) => this.setField('email', event.target.value)}
            />
          </div>

          <label htmlFor="message" className="small-2 extra-small-12">
            Message
          </label>
          <div className="small-10 extra-small-12">
            <textarea
              name="message"
              placeholder="Message..."
              rows="6"
              value={this.state.data.message || ''}
              onChange={(event) => this.setField('message', event.target.value)}
            />
          </div>
          <div className="small-10 small-offset-2 extra-small-12">
            <input
              type="submit"
              value="Send"
              onClick={(event) => this.handleFormSubmit(event)}
            />
          </div>
        </form>

        {this.state.error && (
          <div className="extra-small-12 error">{this.state.error}</div>
        )}
      </Fragment>
    );
  }
}

ContactForm.propTypes = {
  email: PropTypes.string.isRequired,
};

ContactForm.defaultProps = {
  email: process.env.REACT_APP_EMAIL_ADDRESS,
};

export default ContactForm;
