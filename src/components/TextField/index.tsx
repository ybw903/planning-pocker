import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import commonStyle from '../../styles/common';

type TextFieldProps = TextInputProps;

const TextField: React.FC<TextFieldProps> = props => {
  const {children, style: styleProps, value, onChangeText} = props;
  return (
    <TextInput
      style={StyleSheet.compose(styleProps, styles.container)}
      onChangeText={onChangeText}
      value={value}>
      {children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyle.shadow,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});

export default TextField;
