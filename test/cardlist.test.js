import React from 'react';
import ReactDOM from 'react-dom';
import CardList from '../App/CardList/CardList.js';
import { shallow, mount } from 'enzyme';
import cleanedPeople from '../App/Data/People/CleanedPeople'


describe('CardList Test', () => {


  it('1. displays 1 card when passed 1 card', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<CardList cardArr={ [cleanedPeople[0]] }
                                      favArr={ [] }
                                      clickOnFav={ mockClick }/>)

    expect(wrapper.find('.card-container').length).toBe(1)
  });




});
