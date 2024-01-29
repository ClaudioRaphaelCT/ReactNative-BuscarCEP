import { StyleSheet, View } from 'react-native';
import Title from './src/Title/title';
import Main from './src/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Insira o CEP" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
