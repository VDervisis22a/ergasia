import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

const restaurants = [
  { id: '1', name: 'The Italian Place' },
  { id: '2', name: 'Sushi World' },
  { id: '3', name: 'Burger House' },
  { id: '4', name: 'Vegan Delight' },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantItem}
      onPress={() => navigation.navigate('Reservation', { restaurantName: item.name })}
    >
      <Text style={styles.restaurantName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Restaurant</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button 
        title="Go to Profile" 
        onPress={() => navigation.navigate('Profile')} 
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  restaurantItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  restaurantName: { fontSize: 18 },
});
