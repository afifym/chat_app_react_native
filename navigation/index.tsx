/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { View } from '../components/Themed';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ChatRoomScreen from '../screens/ChatRoomScreen';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='Root'
        component={MainTabNavigator}
        options={{
          title: 'V Chat',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'transparent',
                width: 60,
                justifyContent: 'space-between',
                marginRight: 10,
                alignItems: 'center',
              }}
            >
              <Octicons name='search' size={22} color='white' />
              <MaterialCommunityIcons
                name='dots-vertical'
                size={24}
                color='white'
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen
        name='ChatRoom'
        component={ChatRoomScreen}
        options={({ route }: { route: any }) => ({
          title: route?.params?.id,
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'transparent',
                width: 110,
                justifyContent: 'space-between',
                marginRight: 10,
                alignItems: 'center',
              }}
            >
              <FontAwesome5 name='video' size={21} color='white' />
              <MaterialIcons name='call' size={22} color='white' />
              <MaterialCommunityIcons
                name='dots-vertical'
                size={22}
                color='white'
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
