import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './inputBox.style';

const InputBox = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.warn('sending');
    setMessage('');
  };

  const handleMicrophone = () => {
    console.warn('mic');
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <FontAwesome5 name='laugh-beam' size={24} color='grey' />
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name='attachment' size={24} color='grey' style={styles.icon} />
        {!message && (
          <Fontisto name='camera' size={24} color='grey' style={styles.icon} />
        )}
      </View>
      <TouchableOpacity
        onPress={() => (message ? handleSend() : handleMicrophone())}
      >
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name='microphone' size={24} color='white' />
          ) : (
            <MaterialIcons name='send' size={28} color='white' />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
