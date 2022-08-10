import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Principal from './Principal';
//import Navbar from './Navbar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*<Navbar/>*/}
      <Principal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
  }
});
