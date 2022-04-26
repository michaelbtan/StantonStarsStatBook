import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function PlayersScreen() {
  return (
    <View style={styles.container}>
      <Text>Players!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});