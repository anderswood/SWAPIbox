import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../App/Card/Card.js';
import { shallow, mount } from 'enzyme';
import cleanedPeople from '../App/Data/People/CleanedPeople'


describe('Card Test', () => {


  it('1. creates a card', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Card cardData={ cleanedPeople[0] }
                                  favArr={ [] }
                                  clickOnFav={ mockClick }/>)

    expect(wrapper.find('.card-container').length).toBe(1)
  });

  it('2. should assign class of favorited if the cards is in the fav arr', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Card cardData={ cleanedPeople[0] }
                                  favArr={ [cleanedPeople[0]] }
                                  clickOnFav={ mockClick }/>)

    expect(wrapper.find('.favorited').length).toBe(1)
  });

  it('3. should not be favorited if not in favorite array', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Card cardData={ cleanedPeople[0] }
                                  favArr={ [cleanedPeople[1]] }
                                  clickOnFav={ mockClick }/>)

    let container = wrapper.find('.favorited')

    expect(container.length).toEqual(0)
  })

  it('4. should respond to a click on the favorite button', () => {
  const mockClick = jest.fn();
  const wrapper = shallow(<Card cardData={ cleanedPeople[0] }
                                favArr={ [cleanedPeople[1]] }
                                clickOnFav={ mockClick }/>)

  let container = wrapper.find('.star-icon').simulate('click')
  expect(mockClick).toHaveBeenCalled()
  })
});
