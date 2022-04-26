import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={{
        width: 150,
        height: 150,
        uri: 'https://picsum.photos/200',
      }} />
      <Text>Players Name</Text>
      <Text>Contact Number</Text>
      <Text>L10 Games Stats</Text>
      <Text>L10 Games Averages - 21/2&3 Format</Text>
      <Text>All Time Averages - 21/2&3 Format</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});