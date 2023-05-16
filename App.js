import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { COLORS } from './src/utils/constants/theme';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blue }}>
        <AppNavigator />
        <StatusBar style='auto' animated={true} />
      </SafeAreaView>
    </Provider>
  );
}
