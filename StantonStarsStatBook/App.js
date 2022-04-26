import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDimensions } from '@react-native-community/hooks';
import HomeScreen from './src/screens/HomeScreen.js'
import GamesScreen from './src/screens/GamesScreen.js'
import PlayersScreen from './src/screens/PlayersScreen.js'
import NewGameScreen from './src/screens/NewGameScreen.js'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="New Game" component={NewGameScreen} />
        <Tab.Screen name="Games" component={GamesScreen} />
        <Tab.Screen name="Players" component={PlayersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
