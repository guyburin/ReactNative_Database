import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
  AppRegistry,
  ActivityIndicator,
  
} from 'react-native';
import ListView from "deprecated-react-native-listview"
import { Container, Header, Content, Footer, FooterTab, Icon, Badge ,Button,Text} from 'native-base';

// import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert } from 'react-native'; // sql

export default class staff extends Component {

    constructor(props) {
        super(props);
        this.state = {
        isLoading: true
        }
        
    }
    GetItem (SID) {
   
        Alert.alert(SID);
       
    }

    componentDidMount() {
        return fetch('http://172.16.157.228/package.php')
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
            }, function() {
            // In this block you can do something with new state.
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }

        
    ListViewItemSeparator = () => {
        return (
                 <View
                 style={{
                 height: .5,
                 width: "100%",
                 backgroundColor: "#000",
                 }}
                 />
            );
        }

        img = (SPhoto) => {
          switch (SPhoto) {
            case 'Dinner.jpg':
              return (<Image  source={require('../images/package/Dinner.jpg')} style={{padding: 10,marginLeft:-47,borderRadius: 30,width:400,
                height:200,}} /> );
                case 'GTour.jpg':
              return (<Image source={require('../images/package/GTour.jpg')} style={{padding: 10,marginLeft:-47,borderRadius: 30,width:400,
                height:200,}} />);
                case 'Lunch.jpg':
              return (<Image source={require('../images/package/Lunch.jpg')} style={{padding: 10,marginLeft:-47,borderRadius: 30,width:400,
                height:200,}} />);
                case 'Toompang.jpg':
                  return (<Image source={require('../images/package/Toompang.jpg')} style={{padding: 10,marginLeft:-47,borderRadius: 30,width:400,
                    height:200,}} />);
          }
        };

  render() {
    if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
    return (
      <View style={styles.container}>
      <View style={styles.body}>
        {/* <Image style={styles.img} source={require('../images/logo/WUTour.png')} /> */}
        {/* <View style={styles.MainContainer}>
        
      </View> */}
            <ListView style={{height:1000}}
          dataSource={this.state.dataSource}
          renderSeparator= {this.ListViewItemSeparator}
          renderRow={(rowData) =>
            //  <Text style={styles.rowViewContainer} onPress={this.GetItem.bind(this, rowData.SID)} >{rowData.SName}</Text>
             <View>
      <View style={{alignItems:'center', marginHorizontal:50,marginTop:10}}>
            {this.img(rowData.PPhoto)}
            <Text style={styles.name}>{rowData.PName}</Text>
            <Text style={styles.price}>{rowData.PPrice} Bath.</Text>
          </View>
     </View>
            }/>
     </View>

     
          <Footer>
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
MainContainer :{
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
    rowViewContainer: {
            fontSize: 20,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
          },
          row: {
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#DCDCDC',
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            padding: 10,
          },
          pic: {
            borderRadius: 30,
            width: 60,
            height: 60,
          },
          nameContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 280,
          },
          nameTxt: {
            marginLeft: 15,
            fontWeight: '600',
            color: '#222',
            fontSize: 18,
            width:170,
          },
          mblTxt: {
            fontWeight: '200',
            color: '#777',
            fontSize: 13,
          },
          msgContainer: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          msgTxt: {
            fontWeight: '400',
            color: '#008B8B',
            fontSize: 12,
            marginLeft: 15,
          },
          productImg:{
            width:200,
            height:200,
          },
          name:{
            fontSize:28,
            color:"#696969",
            fontWeight:'bold'
          },
          price:{
            marginTop:10,
            fontSize:18,
            color:"green",
            fontWeight:'bold'
          },
});  