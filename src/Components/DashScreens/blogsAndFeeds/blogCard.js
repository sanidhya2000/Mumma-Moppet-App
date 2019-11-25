import React,{Component} from 'react'
import {StyleSheet,View,Text, Image} from 'react-native'

class BlogCard extends Component{
    constructor(props){
        super(props)
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


                </View>
                <View style={styles.right}>
                    

                    <View style={styles.subTitle}>
        <Text style={{color:'white',fontSize:17}}>{this.props.subTitle}</Text>
                    </View>

                    <View style={styles.conTitle}>
        <Text style={{color:'white'}}>{this.props.content}</Text>
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
        marginTop:-6,
        marginLeft: 0,
        //borderWidth:2,
        height: 52,
        shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:2,
        borderRadius:25,
        width: 375,
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
        width:170,
        height:246,
        
        
    },
    right:{
        //borderWidth:2,
        width:200,
        height:246,
    },

    image:{
        //borderWidth:2,
        marginTop:10,
        marginLeft:5,
        width:160,
        height:220
    },

    name:{
        //borderWidth:2,
        marginTop:20,
        marginLeft:40,
        width:160,
        height:40,
        flexDirection:'row'

    },

    by:{
        //borderWidth:2,
        marginTop:5,
        marginLeft:3,
        width:30,
        height:25
    },

    auther:{
        //borderWidth:2,
        marginTop:5,
        marginLeft:5,
        width:110,
        height:25
    },

    title:{
        //borderWidth:2,
        marginTop:10,
        marginLeft:5,
        width:200,
        height:30
    },

    subTitle:{
        //borderWidth:2,
        marginTop:15,
        marginLeft:5,
        width:190,
        height:30
    },

    conTitle:{
        //borderWidth:2,
        marginTop:20,
        marginLeft:5,
        width:190,
        height:110
    },

    see:{
        //borderWidth:2,
        marginTop:10,
        marginLeft:30,
        width:90,
        height:30
    },
})

export default BlogCard;