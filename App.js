import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DrawerLayout from "./components//DrawerLayout";
export default function App() {
  return (
    <View style={styles.container}>
        <DrawerLayout />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
