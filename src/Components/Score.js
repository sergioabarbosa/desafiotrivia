import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Score extends Component {
  render() {
    const { score, dataTestId } = this.props;
    return (
      <h1
        className="feedText"
        data-testid={ dataTestId }
      >
        {score}
      </h1>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.user.score,
});

export default connect(mapStateToProps)(Score);

Score.propTypes = {
  score: PropTypes.number.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
