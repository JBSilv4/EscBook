import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../Pages/Home';
import { BellAlertBox } from '../AlertBell';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BellAlert" component={BellAlertBox} />
      </Stack.Navigator>
  );
}