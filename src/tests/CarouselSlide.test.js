import React from 'react';
import { shallow } from 'enzyme';

import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl='https://example.com/image.png'
        description='A jaw droppingly spectacular image'
        attribution='Trevor Burnham'
      />
    );
  });

  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure');
  });

  it('renders an props.Img and a <figcaption> as children', () => {
    expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img);
    expect(wrapper.childAt(1).type()).toBe('figcaption');
  });

  it('passes `imgUrl` through to the props.Img', () => {
    const imgUrl = 'https://example.com/image.png';
    wrapper.setProps({ imgUrl });
    const img = wrapper.find(CarouselSlide.defaultProps.Img);
    expect(img.prop('src')).toBe(imgUrl);
  });

  it('uses `description` and `attribution` as the <figcaption>', () => {
    const description = 'A jaw droppingly spectacular image';
    const attribution = 'Trevor Burnham';

    expect(wrapper.find('figcaption').text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find('figcaption strong').text()).toBe(description);
  });

  it('passes other props to the <figure>', () => {
    const style = {};
    const onClick = () => {};
    const className = 'my-carousel-slide';

    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop('style')).toBe(style);
    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
  });

  it('renders correctly', () => {
    wrapper.setProps({
      description: 'Description',
      attribution: 'Attribution',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
