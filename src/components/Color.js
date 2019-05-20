import React from 'react';
import PropTypes from 'prop-types';

function Color({ match }) {
  const style = {
    backgroundColor: decodeURIComponent(match.params.color),
    width: '50vw',
    height: '50vw',
    fontSize: '4em',
    color: 'black'
  };

  return <div style={style}>{ style.backgroundColor }</div>;
}

Color.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      color: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Color;
