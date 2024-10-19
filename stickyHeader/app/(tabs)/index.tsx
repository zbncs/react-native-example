import List from '@/example/screens/List';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
     <List />
    </SafeAreaProvider>
  );
}

