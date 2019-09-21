import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'
import { Container, Header, Content, Footer, FooterTab, Icon, Badge ,Button,Text} from 'native-base';
import ListView from "deprecated-react-native-listview"
export default class searchstaff extends Component {

  constructor(props) {
    super(props);
    this.state ={
        keyword:''
    }
  
  }
  

  

  render() {
    return (
      <View style={styles.container}>
     <View>
         <Text>LineChart </Text>
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

  <Text>Progress Ring</Text>
<ProgressChart
  data={{
      
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8]
  }}
  width={Dimensions.get('window').width}
  height={220}
  chartConfig={{
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>
</View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor :'#ffffff',
    flex:1,
    justifyContent:'center',
    
},
body : {
    backgroundColor :'#ffffff',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:20
},
img :{
    height: 250,
    width: 300
},
container1:{
  paddingTop:40,
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop:-30
},
menuBox:{
  backgroundColor: "#ffffff",
  width:150,
  height:100,
  alignItems: 'center',
  justifyContent: 'center',
  margin:12
},
icon: {
  width:30,
  height:30,
},
info:{
  fontSize:22,
  color: "#696969",
},
inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:300,
    borderRadius:30,
    backgroundColor:'#0566CF'
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  }
});  