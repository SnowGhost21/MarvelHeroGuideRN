import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../../src/view/home/HomeScreen';

jest.setTimeout(15000);

it('It should render component correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});