import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function NewGameScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>games!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});