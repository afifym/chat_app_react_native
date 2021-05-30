import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  preview: {
    height: 50,
    justifyContent: 'space-around',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    color: 'grey',
    fontSize: 16,
  },
  time: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 'auto',
    alignSelf: 'flex-start',
  },
});

export default styles;
