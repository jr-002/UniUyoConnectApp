import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button, StyleSheet } from 'react-native';

// Attempt to import the Berty bridge module
// Note: Linking the locally built module might require further configuration
// in package.json or native build files (build.gradle, Podfile).
// For now, we assume it can be imported directly after being placed in the project.
// If this fails, we'll need to adjust the import path or linking method.
import * as BertyBridge from 'berty-bridge-expo'; // Placeholder import

// Placeholder screens
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen (News/Events)</Text>
      {/* News/Events feed will be implemented here */}
    </View>
  );
}

function MessagesScreen() {
  const [bertyStatus, setBertyStatus] = useState('Initializing...');

  useEffect(() => {
    async function initBerty() {
      try {
        // Example: Call a hypothetical init function from the bridge
        // The actual function name and parameters depend on the bridge's API
        // We might need to refer back to the berty-bridge-expo source/example
        // await BertyBridge.init({ storagePath: '/path/to/storage' }); // Example call
        setBertyStatus('Berty Bridge Loaded (Placeholder)');
        // TODO: Implement actual Berty initialization and listeners
      } catch (error) {
        console.error('Failed to initialize Berty:', error);
        setBertyStatus('Berty Initialization Failed');
      }
    }
    // initBerty(); // Temporarily commented out until import/linking is confirmed
    setBertyStatus('Berty Module Not Initialized (Placeholder)'); // Default status
  }, []);

  return (
    <View style={styles.container}>
      <Text>Messages Screen (Berty)</Text>
      <Text>Status: {bertyStatus}</Text>
      {/* Chat list and interface will go here */}
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      {/* Map integration will go here */}
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0e8c3a', // UniUyo Green
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#0e8c3a', // UniUyo Green Header
          },
          headerTintColor: '#fff', // White header text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

