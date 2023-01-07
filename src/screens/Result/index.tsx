import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ScreenStackParamList} from '../../App';
import {Button} from '../../components';
import {dummyRooms, dummyCards} from '../../data';
import {Room} from '../../types';

type ResultScreenProps = StackScreenProps<ScreenStackParamList, 'Result'>;

const ResultScreen: React.FC<ResultScreenProps> = ({route}) => {
  const {roomId} = route.params;

  const navigation = useNavigation<NavigationProp<ScreenStackParamList>>();
  const timeoutRef = useRef<null | number>(null);
  const [room, setRoom] = useState<Room>();

  const participatns = room?.participants ?? [];
  const isAllUserVoted =
    participatns.length !== 0 &&
    participatns.length ===
      participatns.filter(participant => participant.vote).length;

  useEffect(() => {
    const enteredRoom = dummyRooms.find(room => room.roomId === roomId);
    if (!enteredRoom) return;

    setRoom(enteredRoom);
  }, [roomId]);

  useEffect(() => {
    if (!room) return;
    if (timeoutRef.current !== null) return;

    const finishTimeout = setTimeout(() => {
      const nextParticipants = participatns.map(participant => ({
        ...participant,
        vote: dummyCards[Math.floor(Math.random() * dummyCards.length)],
      }));
      const nextRoom = {...room, participants: nextParticipants};
      setRoom(nextRoom);
    }, 4000);
    timeoutRef.current = finishTimeout;

    return () => {
      clearTimeout(finishTimeout);
    };
  }, [room]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) timeoutRef.current = null;
    };
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {isAllUserVoted ? (
          <View>
            <FlatList
              data={participatns}
              renderItem={({item}) => (
                <View>
                  <View>
                    <Text>{item.userName}</Text>
                  </View>
                  <View>
                    <Text>{item.vote}</Text>
                  </View>
                </View>
              )}
            />
            <Button onPress={() => navigation.navigate('Home')}>
              <Text style={{color: '#fff'}}>{'나가기'}</Text>
            </Button>
          </View>
        ) : (
          <View>
            <Text>
              {`${room?.roomTitle}의 모든 참여자가 카드를 선택 완료하기 까지 대기중입니다...`}
            </Text>
          </View>
        )}
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

export default ResultScreen;
