import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

type FlexViewProps = ViewProps & {gapVertical?: number; gapHorizontal?: number};

const FlexView: React.FC<FlexViewProps> = props => {
  const {
    children,
    style: styleProps,
    gapVertical = 0,
    gapHorizontal = 0,
  } = props;

  return (
    <View style={StyleSheet.compose(styleProps, styles.container)}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              ...child.props,
              style: {
                ...child.props.style,
                marginTop: gapVertical / 2,
                marginBotton: gapVertical / 2,
                marginLeft: gapHorizontal / 2,
                marginRight: gapHorizontal / 2,
              },
            })
          : child,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

export default FlexView;
