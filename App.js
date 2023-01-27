import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Functions/StackNavigator';
import ButtonDouble from './src/Pages/Components';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}