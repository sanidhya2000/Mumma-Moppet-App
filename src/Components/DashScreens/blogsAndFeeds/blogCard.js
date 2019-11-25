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
import { ScrollView } from 'react-native-gesture-handler';

class BlogCard extends Component{
    constructor(props){
        super(props)
    }



    Full=()=>{
        console.log(this.props.weblink)
        this.props.openWeb(this.props.weblink);
    }

    render(){
        return(

            <View style={styles.container}>



                <View style={styles.head}>

        <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>{this.props.title}</Text>

                </View>

                <View style={styles.sections}>
                

                <View style={styles.left}>
                    <View style={styles.image}>
                        <Image source={{uri:this.props.imageLink}} style={{flex: 1,width: null,height: null,resizeMode:'contain'}}/>
                        
                    </View>

                    <View style={styles.see}>

                    {this.props.showSpinner ? 
                    <ActivityIndicator style={styles.spinner} size="small" color="#ffffff" />:
                    <TouchableOpacity style={styles.button} onPress={this.Full}>
                    <Text style={styles.buttonText}>Web View</Text>
                    </TouchableOpacity>
        }
                        
                    </View>


                </View>
                <View style={styles.right}>
                    

                    <View style={styles.subTitle}>
                    <ScrollView>
        <Text style={{color:'#5a53df',fontSize:17}}>{this.props.subTitle}</Text>
        </ScrollView>
                    </View>

       
                    <View style={styles.conTitle}>
                    <ScrollView>
        <Text style={{color:'#CDCBFE'}}>{this.props.content}</Text>
                    </ScrollView>
                    </View>

                    

                    <View style={styles.name}>
                        <View style={styles.by}>
                            <Text style={{color:'white'}}>By:</Text>
                            
                        </View>

                        <View style={styles.auther}>
        <Text style={{color:'white'}}>{this.props.by}</Text>
                        </View>


                    </View>


                </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 15,
		height : 300,
		marginLeft: 10,
		marginRight : 10,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:5,
        marginTop:10,
        backgroundColor:'#2c3e50',
        //borderWidth:2,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',

        

    },

    head:{
        marginTop:-5,
        marginLeft: 0,
        //borderWidth:2,
        height: 52,
        shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:2,
        borderRadius:25,
        width: '99.5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#e67e22',
        color:'white'
    },

    sections:{
        flexDirection:'row'

    },

    left:{
        
        //borderWidth:2,
        width:'47%',
        //width:170,
        height:246,
        
        
    },
    right:{
        //borderWidth:2,
        width:'53%',
        //width:200,
        height:246,
    },

    image:{
        //borderWidth:2,
        marginTop:5,
        marginLeft:5,
        width:'95%',
        //width:160,
        height:180
    },

    buttonText:{
        fontSize:18,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
    
      },
      button:{
        width:150,
        backgroundColor:'#ba2d65',
        borderRadius: 25,
        color:'#ffffff',
        marginVertical:10,
        paddingVertical:12
      },
      spinner:{
        width:150,
        borderRadius: 25,
        color:'#ffffff',
        marginVertical:10,
        paddingVertical:12,
        backgroundColor:'#ba2d65'
      },

    name:{
        //borderWidth:2,
        marginTop:10,
        marginLeft:40,
        width:'78%',
        height:40,
        flexDirection:'row'

    },

    by:{
        //borderWidth: 2,
        marginTop: 5,
        marginLeft:2,
        width:'17%',
        height:25
    },

    auther:{
        //borderWidth:2,
        marginTop:5,
        marginLeft:2,
        width:'80%',
        height:25
    },

    title:{
        //borderWidth:2,
        marginTop:10,
        marginLeft:5,
        width:'98%',
        height:30
    },

    subTitle:{
        //borderWidth:2,
        marginTop:8,
        marginLeft:5,
        width:'95%',
        height:40
    },

    conTitle:{
        //borderWidth:2,
        marginTop:10,
        marginLeft:5,
        width:'95%',
        height:130
    },

})

export default BlogCard;