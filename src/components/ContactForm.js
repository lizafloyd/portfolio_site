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
    if (
      !this.state.data.name ||
      !this.state.data.email ||
      !this.state.data.message
    ) {
      this.setState({error: true});
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
        <div
          className={`red text-center ${!this.state.error ? 'invisible' : ''}`}
        >
          Some required fields are missing!
        </div>
        <form
          className="row"
          ref="form"
          action={`https://formspree.io/${email}`}
          method="POST"
        >
          <label htmlFor="name" className="small-2 extra-small-12 accent bold">
            Name
          </label>
          <div className="small-10 extra-small-12">
            <input
              className={
                this.state.error && !this.state.data.name ? 'error' : ''
              }
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
              value={this.state.data.name || ''}
              onChange={(event) => this.setField('name', event.target.value)}
            />
          </div>
          <label
            htmlFor="_replyto"
            className="small-2 extra-small-12 accent bold"
          >
            Email
          </label>
          <div className="small-10 extra-small-12">
            <input
              className={
                this.state.error && !this.state.data.email ? 'error' : ''
              }
              type="email"
              name="_replyto"
              placeholder="Email..."
              value={this.state.data.email || ''}
              onChange={(event) => this.setField('email', event.target.value)}
            />
          </div>

          <label
            htmlFor="message"
            className="small-2 extra-small-12 accent bold"
          >
            Message
          </label>
          <div className="small-10 extra-small-12">
            <textarea
              className={
                this.state.error && !this.state.data.message ? 'error' : ''
              }
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
              className="background-yellow bold accent button"
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
