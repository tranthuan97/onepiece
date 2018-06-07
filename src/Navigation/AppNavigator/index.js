import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import StackNavigator from '../StackNavigator';
// import TabNavigator from './TabNavigator';

// https://reactnavigation.org/docs/en/common-mistakes.html

const routeConfigs = {
    Stack: StackNavigator,
    // Tab: TabNavigator,
}

const switchNavigatorConfig = {

}

const AppNavigator = createSwitchNavigator(routeConfigs, switchNavigatorConfig);

export default class App extends React.Component {
    render = () => <AppNavigator />
};

