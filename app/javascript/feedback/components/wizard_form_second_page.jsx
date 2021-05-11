import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { createFeedback } from '../actions';

class WizardFormSecondPage extends Component {
  onSubmit = (values) => {
    this.props.createFeedback(values);
  }

  render() {
  const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <label>Message</label>
          <div>
            <Field name="messages" component="textarea" placeholder="Your text goes here..." />
          </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={pristine || submitting} >Submit</button>
        </div>
      </form>
    );
  }
};


export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(connect(null, { createFeedback })(WizardFormSecondPage));
