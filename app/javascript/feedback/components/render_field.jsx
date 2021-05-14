import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="form-group">
      <div>
        <input className="form-control" {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default renderField
