import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../../components';
import {dummyRooms} from '../../data';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button>
          <Text style={{color: '#fff'}}>{'방 생성'}</Text>
        </Button>
      </View>
      <View>
        <FlatList
          data={dummyRooms}
          renderItem={({item}) => (
            <View key={item.roomId}>
              <TouchableOpacity>
                <Text>{item.roomTitle} </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
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

export default HomeScreen;
