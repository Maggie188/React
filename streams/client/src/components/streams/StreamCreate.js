import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(event) {

  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} lassName="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter the title';
  }

  if (!formValues.description) {
    errors.description = 'Please enter the description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);