import { useRoute } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatMessage from '../components/ChatMessage/ChatMessage';
import chats from '../data/chats';

import BG from '../assets/images/chatRoom_bg.png';
import InputBox from '../components/InputBox/InputBox';

interface IProps {}

const ChatRoomScreen: React.FC<IProps> = () => {
  const route = useRoute();

  console.log(route.params);

  return (
    <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
      <View>
        <FlatList
          data={chats.messages}
          keyExtractor={(message) => message.id}
          renderItem={({ item }) => <ChatMessage message={item} />}
          inverted
        />
      </View>
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
