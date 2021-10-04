import React from 'react';
import '../styles.scss'
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';


const BackButton = ({history}) => {
  return (
    <Button
      onClick={() => {
        history.goBack();
      }}
      className="back-button"
     
    >
      Back
    </Button>
  );
};

BackButton.propTypes = {
  history: PropTypes.object,
};

export default withRouter(BackButton);
