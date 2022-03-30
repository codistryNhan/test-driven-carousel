import React from 'react'; // 1
import { configure, shallow } from 'enzyme'; // 2
import Adapter from 'enzyme-adapter-react-16';
import CarouselButton from '../CarouselButton';

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<CarouselButton />); // 3
    expect(wrapper.type()).toBe('button');
  });
});
