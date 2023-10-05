import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CityList from './src/screens/CityListScreen';
import PlaceDetails from './src/screens/PlaceDetails';
import Favorites from './src/screens/Favorites';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CityList" options={{
          title: 'List of Cities', headerTitleStyle: { fontWeight: 'bold', fontSize: 34, },
        }}>
          {() => <CityList favorites={favorites} setFavorites={setFavorites} />}
        </Stack.Screen>
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{
          title: 'Place Details', headerTitleStyle: { fontWeight: 'bold', fontSize: 34, },
        }} />
        <Stack.Screen name="Favorites" options={{ headerTitleStyle: { fontWeight: 'bold', fontSize: 34, }, }} >
          {() => <Favorites favorites={favorites} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});

export default App;
