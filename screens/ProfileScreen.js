import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ProfileScreen({ reservations, user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.email}>Logged in as: {user?.email}</Text>

      {(!reservations || reservations.length === 0) ? (
        <View style={styles.center}>
          <Text>No reservations found.</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>My Reservations</Text>
          <FlatList
            data={reservations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.reservationItem}>
                <Text style={styles.restaurantName}>{item.restaurantName}</Text>
                <Text>Date: {item.date}</Text>
                <Text>Time: {item.time}</Text>
                <Text>Guests: {item.guests}</Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  email: { fontSize: 18, marginBottom: 20 },
  reservationItem: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  restaurantName: { fontSize: 18, fontWeight: 'bold' },
});
