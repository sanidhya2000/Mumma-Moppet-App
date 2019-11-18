/**
 * @format
 */
import React from 'react'
import 'react-native-gesture-handler'
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
const store=configureStore();
const RNRedux=()=>{
    return(
    <Provider store={store}>
        <App/>
    </Provider>
    )
}
AppRegistry.registerComponent(appName, () => RNRedux);
