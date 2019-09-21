import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Badge ,Button,Text} from 'native-base';
export default class UserProfileView extends Component {

  render() {
    return (
      <View>
          <View style={styles.container}>
        
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../images/staff/7503.jpg')}/>

                <Text style={styles.name}>Guy Burin Panchat </Text>
                <Text style={styles.userInfo}>Burinpanchat@gmail.com </Text>
                <Text style={styles.userInfo}>Walailak University </Text>
                
            </View>
          </View>

          <Text style={styles.description}>Year : 3 </Text>
           <Text style={styles.name}>Major : Software Engineering</Text>
           <Text style={styles.description}>School of informatic</Text>
           <Text style={styles.name}>FB: กาย บุรินทร์</Text>
           <Text style={styles.description}>Line :guyburin02</Text>
           <Text style={styles.name}>Tel :093-713-1682</Text>
           <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
           <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('wushop')}>
                <Text style={styles.btnText}>WU Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('graph')}>
                <Text style={styles.btnText}>Graph</Text>
            </TouchableOpacity>
           </View>
           
           <Footer style={{marginTop:-13}}>
          <FooterTab style = {{ backgroundColor: '#0566CF', color:'#ffffff'}}>
            <Button active style={{backgroundColor:'##B6B900',color:'#eeeeee'}} vertical onPress={() => this.props.navigation.navigate('Homescreen')}>
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
          </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
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