import { createStackNavigator } from "react-navigation-stack";

import Main from "./AppHomeTabsMain";

const HomeTabsNavigator = createStackNavigator({
  Main: {
    navigationOptions: {
      //header: null
    },
    screen: Main
  },
});

HomeTabsNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  swipeEnabled: navigation.state.index === 0
});

export default HomeTabsNavigator;
