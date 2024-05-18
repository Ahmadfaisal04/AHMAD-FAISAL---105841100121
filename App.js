import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
        <View style={{ flex: 1, backgroundColor: 'green' }}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
    </View>
  );
}
