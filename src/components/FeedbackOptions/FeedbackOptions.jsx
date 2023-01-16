import React from 'react';
import { Button, ButtonList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(text => {
        const capitalizeFirstLetter =
          text.charAt(0).toUpperCase() + text.slice(1);

        return (
          <li key={text}>
            <Button id={text} onClick={onLeaveFeedback}>
              {capitalizeFirstLetter}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
