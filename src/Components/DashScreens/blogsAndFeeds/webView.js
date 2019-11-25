import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    ToastAndroid } from 'react-native'

import { WebView } from 'react-native-webview';

class WebCard extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions={
        header:null
      }

    render(){
       
        return(
            <WebView source={{ uri: this.props.navigation.getParam('weblink', 'https://facebook.github.io/react-native/') }} />
        )
    }




}

export default WebCard;