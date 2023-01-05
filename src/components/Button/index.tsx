import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import commonStyle from '../../styles/common';

type ButtonProps = TouchableOpacityProps;

const Button: React.FC<ButtonProps> = props => {
  const {children, onPress, style: styleProps} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(styleProps, styles.container)}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C73D2',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    ...commonStyle.shadow,
  },
});

export default Button;
