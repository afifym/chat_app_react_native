import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import chatRooms from '../../data/chatRooms';
import { ChatRoom } from '../../types';
import styles from './chatListItem.style';

interface IProps {
  chatRoom: ChatRoom;
}

const ChatListItem: React.FC<IProps> = ({ chatRoom }) => {
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ChatRoom', { id: chatRoom.id });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.preview}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
        <Text style={styles.time}>
          {new Date(chatRoom.lastMessage.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
