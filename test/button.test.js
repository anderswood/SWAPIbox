import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../App/Button/Button'
import { shallow, mount } from 'enzyme';


describe('Button test', () => {

  it('1. has an instance of button', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Button className='button'
                                    type={ 'vehicle' }
                                    updateCards ={ mockClick }
                                    activeButton={ mockClick }/>)

    let container = wrapper.find('button').simulate('click')

    expect(container.length).toEqual(1)
    expect(wrapper.node.type).toEqual('button')
  });

  it('2. can be clicked to update cardData', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Button className='button'
                                    type={ 'vehicle' }
                                    updateCards ={ mockClick }
                                    activeButton={ mockClick }/>)
    let container = wrapper.find('button').simulate('click')

    expect(container.length).toEqual(1)
    expect(mockClick).toHaveBeenCalled()
  });
})
