import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function GamesScreen() {
  return (
    <View style={styles.container}>
      <Text>games!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});