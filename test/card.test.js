// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from '../App/Card/Card.js';
// import { shallow, mount } from 'enzyme';
// import {  } from 'jest'
// // import cardData from '../App/Data/data.js';
//
// let cardObj;
// let favArr;
//
// describe('Card Test', () => {
//
//   beforeEach( () => {
//      cardObj = { location: '', data: [] };
//      favArr = [{location: 'Colorado'}, {location: 'rightCardBlank'}];
//   })
//
//   it.only('1. has one class of card-container', () => {
//     const mockClick = jest.fn();
//     const wrapper = shallow(<Card cardData={ cardObj }
//                                   favArr={ favArr }
//                                   clickOnFav={ mockClick }/>)
//
//     expect(wrapper.find('.card-container').length).toBe(1)
//   });
//
//   it('2. have a class of year-data', () => {
//     const wrapper = shallow(<Card district={ cardInfo }
//                                   cardSelected={ mockArr }/>)
//
//     expect(wrapper.find('.year-data')).toBeTruthy()
//   });
//
//   it('3. should create a blank card if "cardBlank" prop is true', () => {
//     const wrapper = shallow(<Card district={ cardInfo }
//                                   cardBlank={ true }/>)
//
//     expect(wrapper.find('.blank-card')).toBeTruthy()
//   });
//
//   it('4. should assign a class of "low-percent" if the data is less than 0.5', () => {
//     const cardInfo = {
//       data:{'year1': 0.342, 'year2': 0.545}, location: 'location1',
//     }
//     const wrapper = shallow(<Card district={ cardInfo }
//                                   cardBlank={ false }
//                                   cardSelected={ mockArr }/>)
//
//     expect(wrapper.find('.low-percent').length).toBe(1)
//   });
//
//   it('5. selected cards should receive a class of "selected"', () => {
//     const cardInfo = {
//       location: 'Colorado',
//       data: []
//     }
//     const wrapper = shallow(<Card district={ cardInfo }
//                                   cardBlank={ false }
//                                   cardSelected={ mockArr }/>)
//
//     expect(wrapper.find('.selected').length).toBe(1)
//   });
//
//   it('6. when clicked, a card should receive a class of "selected"', () => {
//     const cardInfo = {
//       location: 'Colorado',
//       data: []
//     }
//     mockArr = [{location: 'leftCardBlank'}, {location: 'rightCardBlank'}];
//     const mockSelectClick = jest.fn();
//
//     const wrapper = mount(<Card district={ cardInfo }
//                                 handleClick={ mockSelectClick }
//                                 cardBlank={ false }
//                                 cardSelected={ mockArr }/>)
//
//     expect(wrapper.find('.selected').length).toBe(0);
//
//     wrapper.find('.district-card').simulate('click');
//
//     expect(mockSelectClick).toHaveBeenCalledTimes(1);
//     expect(mockSelectClick).toHaveBeenCalledWith( cardInfo );
//   });
//
// });
