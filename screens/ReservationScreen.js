import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ReservationScreen({ route, navigation, addReservation }) {
  const { restaurantName } = route.params || {};

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = () => {
    if (!date || !time || !guests) {
      alert('Please fill all fields');
      return;
    }
    addReservation({ restaurantName, date, time, guests });
    alert('Reservation saved!');
    navigation.navigate('Profile'); // Navigate to profile to see the reservation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserve at {restaurantName}</Text>
      <TextInput placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Time (HH:MM)" value={time} onChangeText={setTime} style={styles.input} />
      <TextInput placeholder="Number of guests" value={guests} onChangeText={setGuests} keyboardType="numeric" style={styles.input} />
      <Button title="Submit Reservation" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 20, justifyContent:'center' },
  title: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15, padding: 10 },
});
