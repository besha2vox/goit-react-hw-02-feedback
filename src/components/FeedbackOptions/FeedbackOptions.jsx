import { Button, ButtonList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'functions/capitalizeFirstLetter';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(text => (
        <li key={text}>
          <Button id={text} onClick={onLeaveFeedback}>
            {capitalizeFirstLetter(text)}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
