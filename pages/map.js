import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class map extends Component {

  render() {
    return (
      <View style={styles.container}>
          {/* <Text style={{fontSize:30}}>ทางเดินรถไฟฟ้า</Text> */}
         <ScrollView>
         <Image style={{width:385,height:220,justifyContent:'center',marginTop:20}} source={require('../images/head.jpg')} />
          <Image style={{width:385,height:220,justifyContent:'center',marginTop:20}} source={require('../images/WU.png')} />
          <Image style={{width:385,height:220,justifyContent:'center',marginTop:20}} source={require('../images/car.jpg')} />
         </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
   justifyContent:'center',
   alignContent:'center',
   alignItems:'center'
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#ffffff",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
    fontSize:22,
  },
});