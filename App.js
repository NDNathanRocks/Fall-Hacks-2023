import HomePage from './components/HomePage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatRoomPage from './components/ChatRoomPage';
import AIChatPage from './components/AIChatPage';

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} activeColor='white'>
        <Tab.Screen name='HomePage' component={HomePage}
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='home' color={color} size={26} />
            )
          }}
          />
        <Tab.Screen name='ChatRoomPage' component={ChatRoomPage}
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='chat' color={color} size={26} />
            )
          }}
        />
        <Tab.Screen name='AIChatPage' component={AIChatPage}
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='magnify' color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

