import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerLayout from './components/DrawerLayout';
//import { routes } from './utils/Routes';
import Home from "./screens/Home";
import About from "./screens/About";

const Stack = createStackNavigator();
const App = () => {
    const headerOptions = () => {
        return {
            headerShown: false,
        };
    };

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="DrawerLayout">
              <Stack.Screen name="DrawerLayout" component={DrawerLayout}
                            options={headerOptions}
                  />
              <Stack.Screen name="Home" component={Home}
                            options={headerOptions}
                  />
              <Stack.Screen name="About" component={About}
                            options={headerOptions}
                  />
              {/*<Stack.Screen name="SubServices" component={routes.profile.screen}
                            options={headerOptions}
              />*/}
          </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;