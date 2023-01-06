import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenStackParamList} from '../../App';
import {Button} from '../../components';
import {dummyRooms} from '../../data';
import {Room} from '../../types';

type RoomScreenProps = StackScreenProps<ScreenStackParamList, 'Room'>;

const RoomScreen: React.FC<RoomScreenProps> = ({route}) => {
  const {roomId} = route.params;

  const navigation = useNavigation<NavigationProp<ScreenStackParamList>>();
  const [room, setRoom] = useState<Room>();

  useEffect(() => {
    const enteredRoom = dummyRooms.find(room => room.roomId === roomId);
    if (!enteredRoom) return;

    setRoom(enteredRoom);
  }, [roomId]);

  return (
    <View style={styles.container}>
      {room ? (
        <View>
          <Text>{room.roomTitle}</Text>
          <Button onPress={() => navigation.navigate('Select', {roomId})}>
            <Text style={{color: '#fff'}}>{'시작'}</Text>
          </Button>
        </View>
      ) : (
        <View></View>
      )}
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

export default RoomScreen;
