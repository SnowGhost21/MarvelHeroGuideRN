import 'react-native';
import React from 'react';
import SplashScreen from '../../../src/view/splash/SplashScreen';
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('It should render component correctly', () => {
    const tree = renderer.create(<SplashScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('It should render image logo correctly', async (done) => {
    const Image = require('Image');
    Image.getSize('../../../imgs/ic_logo.png', (width, height) => {
        const tree = renderer.create(<Image style={{ height, width }} />).toJSON();
        expect(tree).toMatchSnapshot();
        done();
    });
});