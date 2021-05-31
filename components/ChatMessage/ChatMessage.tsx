import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import styles from './chatMessate.style';

interface IProps {
  message: Message;
}

const ChatMessage: React.FC<IProps> = ({ message }) => {
  const isMyMessage = message.user.id === 'u1';

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage ? '#dcf8c5' : 'white',
            marginLeft: isMyMessage ? 50 : 0,
            marginRight: isMyMessage ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage && (
          <Text style={styles.username}>{message.user.name}</Text>
        )}
        <Text style={styles.messageContent}>{message.content}</Text>
        <Text style={styles.date}>
          {new Date(message.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;
