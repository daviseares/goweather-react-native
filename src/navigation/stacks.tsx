import { createNativeStackNavigator } from '~/modules';
import { ForecastScreen, StartScreen } from '~/screens';
import { Routes } from '~/utils';

const MainStack = createNativeStackNavigator();

const Navigation = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <MainStack.Screen name={Routes.START} component={StartScreen} />
    <MainStack.Screen name={Routes.FORECAST} component={ForecastScreen} />
  </MainStack.Navigator>
);

export default Navigation;
