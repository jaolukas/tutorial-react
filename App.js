import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Ola Mundo do React Nativo! (Expo)</Text>
      <Text style={styles.subtitle}>Apenas os Melhores do Mundo. </Text>
      <Logo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: 'blue',
    padding: 10,
    margin: 30,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 300,
    color: 'red',
    padding: 10,
    margin: 30,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  logo: {
    width: 60,
    height: 60
}
});
