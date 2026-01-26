import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Square from './components/Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square text="Square 1" backgroundColor="#7ce0f9" />
      <Square text="Square 2" backgroundColor="#4dc0b5" />
      <Square text="Square 3" backgroundColor="#f66d9b" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
