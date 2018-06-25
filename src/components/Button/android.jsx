// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#E2445C',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default (props: any) => <Button {...props} style={[style.button, props.style]} />;
