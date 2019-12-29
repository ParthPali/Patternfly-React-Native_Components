import { createBottomTabNavigator } from "react-navigation-tabs";
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import AppHomeTabs from "../../src/Home/AppHomeTabs";
import AlertPage from "../../src/Home/AlertPage";
import DataList from "../../src/Home/DataList";
import CardPage from "../../src/Home/CardPage";
import ModalPage from "../../src/Home/ModalPage";
import ButtonPage from "../../src/Home/ButtonPage";
import LoginPage from "../../src/Home/LoginPage";

const CustomTabNavigator = createBottomTabNavigator(
//const CustomTabNavigator = createMaterialBottomTabNavigator(
  {
    AppHomeTabs: {
      navigationOptions: {
        tabBarLabel: "Home"
      },
      screen: AppHomeTabs
    },
    AlertPage: {
      navigationOptions: {
        tabBarLabel: "Alert"
      },
      screen: AlertPage
    },
    ButtonPage: {
      navigationOptions: {
        tabBarLabel: "Buttons"
      },
      screen: ButtonPage
    },
    DataList: {
      navigationOptions: {
        tabBarLabel: "Data List"
      },
      screen: DataList
    },
    ModalPage: {
      navigationOptions: {
        tabBarLabel: "Modal"
      },
      screen: ModalPage
    },
    CardPage: {
      navigationOptions: {
        tabBarLabel: "Card"
      },
      screen: CardPage
    },
    LoginPage: {
      navigationOptions: {
        tabBarLabel: "Login"
      },
      screen: LoginPage
    },
  },
  {
    'lazy': true,
    tabBarOptions: {
      scrollEnabled: true,
    },
  }
);

export default CustomTabNavigator;
