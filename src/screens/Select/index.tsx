import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenStackParamList} from '../../App';
import {dummyCards} from '../../data';

type SelectScreenProps = StackScreenProps<ScreenStackParamList, 'Select'>;

const SelectScreen: React.FC<SelectScreenProps> = ({route}) => {
  const {roomId} = route.params;
  const navigation = useNavigation<NavigationProp<ScreenStackParamList>>();
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyCards}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Result', {roomId})}>
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
