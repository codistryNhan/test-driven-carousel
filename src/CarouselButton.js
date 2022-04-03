import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = (props) => <button {...props} />; //1

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselButton;
