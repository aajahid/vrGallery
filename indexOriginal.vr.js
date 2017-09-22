import React from 'react';
import {
  AppRegistry,
  asset,
  View
} from 'react-vr';
import panoVr from './pano.vr'

export default class testVr extends React.Component {
  


  render() {
    return (
      <View>
        <panoVr />
      </View>
    );
  }
};

AppRegistry.registerComponent('testVr', () => testVr);
