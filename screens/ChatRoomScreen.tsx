import { useRoute } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';

interface IProps {}

const ChatRoomScreen: React.FC<IProps> = () => {
  const route = useRoute();

  console.log(route.params);

  return (
    <View>
      <Text>Chat Room</Text>
    </View>
  );
};

export default ChatRoomScreen;
