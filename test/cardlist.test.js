import React from 'react';
import ReactDOM from 'react-dom';
import CardList from '../App/CardList/CardList.js';
import { shallow, mount } from 'enzyme';
import cleanedPeople from '../App/Data/People/CleanedPeople'


describe('CardList Test', () => {


  it('1. is a thing that renders somewhere or something like that', () => {
    const testArr = cleanedPeople

    const mockClick = jest.fn();
    const wrapper = shallow(<CardList className='card-list'
                                    cardArr={[testArr[0], [testArr[1]]]}
                                    favArr={[testArr[0]]}
                                    clickOnFav={mockClick}/>)

    expect(wrapper.length).toEqual(1)
  });

  it('2. information passed through CardList renders to the appropriate number of children', () => {
    const testArr = cleanedPeople

    const mockClick = jest.fn();
    const wrapper = shallow(<CardList className='card-list'
                                    cardArr={[testArr[0], [testArr[1]]]}
                                    favArr={[testArr[0]]}
                                    clickOnFav={mockClick}/>)


    expect(wrapper.children().length).toEqual(2)
  });

});
