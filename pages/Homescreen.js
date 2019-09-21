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
import { Container, Header, Content, Footer, FooterTab, Icon, Badge ,Button,Text} from 'native-base';

export default class Homescreen extends Component {

  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Image style={{width:350,height:300,justifyContent:'center',alignItems:'center'}} source={require('../images/logo/WUTour.png')} />
      // </View>
      <View style={styles.container}>
        <Image style={{width:450 ,height:350,marginLeft:-16}}  source={require('../images/logo/WUTour.png')} />
      <View style={styles.body}>
      
        {/* <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('staff')}>
            <Text style={styles.btnText}>Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('searchstaff')}>
            <Text style={styles.btnText}>Search Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('customer')}>
            <Text style={styles.btnText}>customer</Text>
        </TouchableOpacity> */}
       <View style={styles.container1}>
         <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('staff')}}>
        <View style={styles.menuBox}>
          <Image style={styles.icon} source={require('../images/logo/service.png')}/>
          <Text style={styles.info}>Staff</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('searchstaff')}}>
        <View style={styles.menuBox}>
        <Image style={styles.icon} source={require('../images/logo/worker.png')}/>
          <Text style={styles.info}>Search Staff</Text>
        </View>
        </TouchableOpacity>
       </View>   
       <View style={styles.container1}>
         <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('customer')}}>
        <View style={styles.menuBox}>
          <Image style={styles.icon} source={require('../images/logo/customer.png')}/>
          <Text style={styles.info}>Customer</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('map')}}>
        <View style={styles.menuBox}>
        <Image style={styles.icon} source={require('../images/logo/map.png')}/>
          <Text style={styles.info}>Maps</Text>
        </View>
        </TouchableOpacity>
       </View>   
      
     </View>

    
     <Footer>
          <FooterTab style = {{ backgroundColor: '#0566CF', color:'#ffffff'}}>
            <Button active style={{backgroundColor:'##B6B900',color:'#eeeeee'}} vertical >
              {/* <Badge><Text>2</Text></Badge> */}
              <Image style={styles.icon} source={require('../images/menubar/home.png')} />
              <Text style={{color:'#ffffff'}}>Home</Text>
            </Button>
            <Button style={{backgroundColor:'##B6B900',color:'#ffffff'}} vertical  onPress={() => this.props.navigation.navigate('package')}>
            <Image style={styles.icon} source={require('../images/menubar/box.png')} />
              <Text style={{color:'#ffffff'}}>package</Text>
            </Button>
            <Button style={{backgroundColor:'##B6B900',color:'#ffffff'}} vertical onPress={() => this.props.navigation.navigate('booking')}>
              {/* <Badge ><Text>2</Text></Badge> */}
              <Image style={styles.icon} source={require('../images/menubar/clipboard.png')} />
              <Text style={{color:'#ffffff'}}>Booking</Text>
            </Button> 
             <Button style={{backgroundColor:'##B6B900',color:'#ffffff'}} vertical onPress={() => this.props.navigation.navigate('profile')}>
             <Image style={styles.icon} source={require('../images/menubar/user.png')} />
              <Text style={{color:'#ffffff'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
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
    height: 350,
    width: 400
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
  marginTop:-20,
  fontSize:16
  
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
    color:'#ffffff',
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