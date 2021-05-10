import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './render_field';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <h2>Infos</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field name="email"
               type="email"
               component={renderField}
               label="Email"
        />
        <div>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
