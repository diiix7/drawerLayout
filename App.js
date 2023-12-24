import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerLayout from './components/DrawerLayout';
import { routes } from './utils/Routes';
import Icon from "react-native-vector-icons/MaterialIcons";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const Stack = createStackNavigator();
const App = () => {
    const headerOptions = () => {
        return {
            //title: "PageName",  //already in Stack.Screen=>name
            headerShown: true,
            headerBackVisible: true,
            //headerLeft: <Icon name="notes" size={40} style={{left:wp("5"),}} />,
        };
    };

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Kiosk">
              <Stack.Screen name="DrawerLayout" component={DrawerLayout}
                            options={headerOptions}
                  />
              <Stack.Screen name="Kiosk" component={routes.home.screen}
                            options={headerOptions}
                  />
              <Stack.Screen name="SubServices" component={routes.profile.screen}
                            options={headerOptions}
                  />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;