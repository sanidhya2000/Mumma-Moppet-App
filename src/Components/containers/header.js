import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Header=(props)=>{
    const {textStyle,viewStyle,iconStyle} = styles;
   
    const toggle = ()=>{
   props.navigation.openDrawer('DrawerOpen');
   }

    return(
        <View style={viewStyle}> 

        <View style={styles.viewHeaderIcon}>
           <TouchableOpacity onPress={toggle} style={iconStyle} > 
                <Icon  size={40}  name="md-menu" color='#ba2d65'/>
           </TouchableOpacity>
        </View>

        <View style={styles.viewHeader}>

             <Text style={textStyle}>{props.headerText}</Text>
        </View>
              
        </View>
       
    )
}

const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#f48fb1',
        flexDirection:'row',
        
        paddingTop:10,
        height:60,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative',
        justifyContent:'center',
        alignItems:'flex-start'

        
    },

    textStyle:{
        fontSize:25,
        color:'white'  ,
        textAlign:'center' ,
        


    },
    iconStyle:{
        width:35,
        
        
    },
    viewHeader:{
       
       flex:1,

       
    },
    viewHeaderIcon:{
        marginLeft:10
    }
});

export default Header;