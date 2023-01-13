import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '~/modules';
import { Navigation } from '~/navigation';
import './utils/config/reactotron';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
