/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import NewRelic from 'newrelic-react-native-agent';
import MainMenu from './src/screens/mainmenu';
import HttpDemo from './src/screens/httpdemo';
import ErrorDemo from './src/screens/errordemo';
import CustomDataDemo from './src/screens/customdatademo';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <NavigationContainer onStateChange={NewRelic.onStateChange}>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={MainMenu}
          //options={{ title: 'New Relic Demo Env' }}

        />
         <Stack.Screen
          name="HttpDemo"
          component={HttpDemo}
          //options={{ title: 'Http Demo' }}

        />
        <Stack.Screen
          name="ErrorDemo"
          component={ErrorDemo}
          //options={{ title: 'Error Demo' }}

        />
        <Stack.Screen
          name="CustomDataDemo"
          component={CustomDataDemo}
          //options={{ title: 'Custom Data Demo' }}

        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
