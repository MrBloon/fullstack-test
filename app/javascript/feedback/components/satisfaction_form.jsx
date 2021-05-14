import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SatisfactionFormFirstPage from '../components/satisfaction_form_first_page';
import SatisfactionFormSecondPage from '../components/satisfaction_form_second_page';


class SatisfactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <SatisfactionFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <SatisfactionFormSecondPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

SatisfactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SatisfactionForm

