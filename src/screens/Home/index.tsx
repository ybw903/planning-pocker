import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Room} from '../../types';

const dummyRooms: Room[] = [
  {
    roomId: '1',
    roomTitle: '방1',
    maxParticipants: 4,
    creator: {userId: 'user1', userName: 'user1'},
    participants: [{userId: 'user1', userName: 'user1'}],
  },
  {
    roomId: '2',
    roomTitle: '방2',
    maxParticipants: 4,
    creator: {userId: 'user2', userName: 'user2'},
    participants: [{userId: 'user2', userName: 'user2'}],
  },
  {
    roomId: '3',
    roomTitle: '방3',
    maxParticipants: 4,
    creator: {userId: 'user3', userName: 'user3'},
    participants: [{userId: 'user3', userName: 'user3'}],
  },
  {
    roomId: '4',
    roomTitle: '방4',
    maxParticipants: 4,
    password: '123',
    creator: {userId: 'user4', userName: 'user4'},
    participants: [{userId: 'user4', userName: 'user4'}],
  },
  {
    roomId: '5',
    roomTitle: '방5',
    maxParticipants: 8,
    creator: {userId: 'user5', userName: 'user5'},
    participants: [{userId: 'user5', userName: 'user5'}],
  },
  {
    roomId: '6',
    roomTitle: '방6',
    maxParticipants: 5,
    password: '2412',
    creator: {userId: 'user1', userName: 'user1'},
    participants: [{userId: 'user1', userName: 'user1'}],
  },
  {
    roomId: '7',
    roomTitle: '방7',
    maxParticipants: 6,
    creator: {userId: 'user1', userName: 'user1'},
    participants: [{userId: 'user1', userName: 'user1'}],
  },
  {
    roomId: '8',
    roomTitle: '방8',
    maxParticipants: 7,
    creator: {userId: 'user1', userName: 'user1'},
    participants: [{userId: 'user1', userName: 'user1'}],
  },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
