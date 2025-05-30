import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function RestaurantDetailScreen({ route, navigation }) {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
      <Button title="Make Reservation" onPress={() => navigation.navigate('Reservation', { restaurant })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  name: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  cuisine: { fontSize: 16, color: '#666' },
});
