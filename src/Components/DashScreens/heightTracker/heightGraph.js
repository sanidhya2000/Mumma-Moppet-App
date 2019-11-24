import React,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import axios from 'axios'
import {connect} from 'react-redux'

const intialState={
	graphData:[],
	y1Data:[],
	x1Data:[]
}

class HeightGraph extends Component{
	constructor(props){
		super(props);
		this.state = intialState;
	}

	componentDidMount(){
		axios.get(`https://backtestbaby.herokuapp.com/api/overallGrowth/graph/${this.props.uuid}`)
		.then(data=>{
			this.setState({graphData:data.data.dataheight});

		})
	}

	render(){

		const idealData = this.state.graphData.map((d)=>{
			return {x:d.days,y:d.idealHeight}
		})

		

		const userData = this.state.graphData.map((d)=>{
			return {x:d.days,y:d.userHeight}
		})



		

		return(
			<View style={{flex: 1}}>
        <View style={styles.container}>
          <LineChart style={styles.chart}
          chartDescription={{text: 'Height Tracker'}}
          legend={{enabled: true,
            text:"height",
            textColor: processColor('#697dfb'),
            textSize:15,
            position: 50,
            xEntrySpace: 30,
            yEntrySpace: 10,
        }}
          
          xAxis= {{
            position : "BOTTOM",
            textSize: 13,
            textColor:processColor('#697dfb'),
            gridColor: processColor('red'),
            gridLineWidth: 1,
            axisLineColor: processColor('darkgray'),
            axisLineWidth: 1.5,
            gridDashedLine: {
              lineLength: 10,
              spaceLength: 10
            },
            drawLabels: true,
          

          }}

          yAxis= {{
            left: {
              drawGridLines: true,
              textSize:13,
              textColor:processColor('#697dfb'),
              gridLineWidth: 1,
              axisLineColor: processColor('darkgray'),
              axisLineWidth: 3,
           

            },
            right: {
              enabled: false
            }
          }}
           
          
          
          data={
       
              {dataSets:[
                { label:"ideal",
                labelTextSize: 12,
                values:idealData,
                config: { 
                  lineWidth:3,
                  labelTextSize: 12,
                  color: processColor('#697dfb'),
                  drawCubicIntensity: 0.8,
                  circleRadius: 5,
                  fillColor: processColor('#697dfb') ,
                  drawFilled: true,
                  valueTextSize: 12,
                  fillAlpha: 90,
                  dashedLine: {
                    lineLength: 20, // required
                    spaceLength: 20, // required
                    phase: 50
                  },
                }
              },
                {label: "user", 
                values:userData,
                config: {
                  lineWidth:3,
                  color: processColor('red'),
                  circleRadius: 5,
                  fillColor: processColor('red') ,
                  drawFilled: true,
                  fillAlpha: 90,
                  valueTextSize: 12,
                }
              },


              ]
            }
          }
          />
        </View>
      </View>	

			)
	}
}

const mapStateToProps=state=>{
  return{
    uuid:state.userReducer.uuid,
    userName : state.userReducer.userName,
    babyName : state.userReducer.babyName,
    avtaarId : state.userReducer.avtaarId
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    setingUuid:(userId)=>dispatch(setUuid(userId)),
    settingUserDetail:(userName,babyName,avtaarId)=>dispatch(setUserDetail(userName,babyName,avtaarId))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HeightGraph);

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    



  },
  chart: {
    
    height: 300,
    marginTop:10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
    
  }
});