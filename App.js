import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ReservationScreen from './screens/ReservationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // Logged-in user info
  const [user, setUser] = useState(null); // { email, password }

  // Reservations state
  const [reservations, setReservations] = useState([]);

  const login = (email, password) => {
    // Simple check: For demo, accept any non-empty email/password
    if (email && password) {
      setUser({ email, password });
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    // Simple register: sets user directly
    setUser({ email, password });
  };

  const addReservation = (reservation) => {
    setReservations((prev) => [...prev, { id: prev.length + 1, ...reservation }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
        {!user ? (
          <>
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} login={login} />}
            </Stack.Screen>
            <Stack.Screen name="Register">
              {(props) => <RegisterScreen {...props} register={register} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Reservation">
              {(props) => <ReservationScreen {...props} addReservation={addReservation} />}
            </Stack.Screen>
            <Stack.Screen name="Profile">
              {(props) => (
                <ProfileScreen
                  {...props}
                  reservations={reservations}
                  user={user}
                />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
