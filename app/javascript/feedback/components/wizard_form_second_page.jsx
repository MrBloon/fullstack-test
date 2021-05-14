import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { createFeedback } from '../actions';
import Modal from 'react-modal';
import renderField from './render_field';

class WizardFormSecondPage extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
  }

  onSubmit = (values) => {
    this.props.createFeedback(values);
    this.setState({showModal: true});
  }

  render() {

  const modalStyle = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
  };

  const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <div>
        <Modal isOpen={this.state.showModal} style={modalStyle}>
          <h2>Thanks !</h2>
          <p>Thank you for your feedback. Our team will get back to you soon.</p>
        </Modal>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label>Message</label>
            <div>
              <Field
                className="form-control"
                name="messages"
                component={renderField}
                placeholder="Your text goes here..." />
            </div>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-outline-primary previous" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="btn btn-outline-primary ml-2" disabled={pristine || submitting} >Submit</button>
          </div>
        </form>
      </div>
    );
  }
};


export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(connect(null, { createFeedback })(WizardFormSecondPage));
