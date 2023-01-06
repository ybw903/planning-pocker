import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenStackParamList} from '../../App';
import {dummyCards} from '../../data';

type SelectScreenProps = StackScreenProps<ScreenStackParamList, 'Select'>;

const SelectScreen: React.FC<SelectScreenProps> = ({route}) => {
  const {roomId} = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyCards}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SelectScreen;
