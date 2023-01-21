import React from 'react';
import PropTypes from 'prop-types';

const Statistic = props => {
  const propsEntries = Object.entries(props).map(([key, value]) => [
    key.charAt(0).toUpperCase() + key.slice(1),
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
