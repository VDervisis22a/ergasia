import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function RestaurantCard({ restaurant, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 10, borderRadius: 10, overflow: 'hidden', backgroundColor: '#fff', elevation: 2 },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  cuisine: { color: '#666' },
});
