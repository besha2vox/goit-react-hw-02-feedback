import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'functions/capitalizeFirstLetter';

const Statistic = props => {
  const propsEntries = Object.entries(props).map(([key, value]) => [
    capitalizeFirstLetter(key),
    value,
  ]);

  return (
    <ul>
      {propsEntries.map(([key, value], indx) => {
        return (
          <li key={indx}>
            <p>
              {key}: {value}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
