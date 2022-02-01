import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import myComponent from "./src/screens/Component";
import ImageScreen from "./src/screens/ImageScreen";

import ListScreen from "./src/screens/List";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorMeterScreen from "./src/screens/ColorMeterScreen";
import ColorSquare from "./src/screens/ColorSquare";
import ColorSquareReducer from "./src/screens/ColorSquareReducer";
import NameScreen from "./src/screens/NameScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: myComponent,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorMeter: ColorMeterScreen,
    ColorSquare: ColorSquare,
    ColorSquareReducer: ColorSquareReducer,
    NameScreen: NameScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Mi primera app",
    },
  }
);

export default createAppContainer(navigator);
