import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import myComponent from "./src/screens/Component";
import ImageScreen from "./src/screens/ImageScreen";

import ListScreen from "./src/screens/List";




const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: myComponent,
    List: ListScreen,
    Image:ImageScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Mi primera app",
    },
  }
);

export default createAppContainer(navigator);
