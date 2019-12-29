import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import CustomDrawerNavigator from "./components/CustomDrawerNavigator"
import Home from "./src/Home";

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  },
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;
