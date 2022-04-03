import React from 'react';
import PropTypes from 'prop-types';

import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';

class Carousel extends React.PureComponent {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
      .isRequired,
  };

  static defaultProps = {
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
  };

  state = {
    slideIndex: 0,
  };

  handlePrevCick = () => {
    const { slides } = this.props;

    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + slides.length - 1) % slides.length,
    }));
  };

  handleNextClick = () => {
    const { slides } = this.props;

    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + 1) % slides.length,
    }));
  };

  render() {
    const { defaultImgHeight, slides, ...rest } = this.props;

    return (
      <div {...rest}>
        <CarouselSlide
          imgHeight={defaultImgHeight}
          {...slides[this.state.slideIndex]}
        />
        <CarouselButton data-action='prev' onClick={this.handlePrevCick}>
          Prev
        </CarouselButton>
        <CarouselButton data-action='next' onClick={this.handleNextClick}>
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default Carousel;