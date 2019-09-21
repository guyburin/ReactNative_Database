import React, { Component } from 'react';
import ListView from "deprecated-react-native-listview"
import { Text, StyleSheet, View, TextInput, ActivityIndicator, Alert } from 'react-native';

export default class MyProject extends Component {
 
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,
      text: '',
    
    }

    this.arrayholder = [] ;
  }
 
  componentDidMount() {
 
    return fetch('http://172.16.157.228/staff.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {

          // In this block you can do something with new state.
          this.arrayholder = responseJson ;

        });
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  GetListViewItem (fruit_name) {
    
   Alert.alert(fruit_name);
  
  }
  
   SearchFilterFunction(text){
     
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.SID.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
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
 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    // img = (SPhoto) => {
    //   switch (SPhoto) {
    //     case '7501.jpg':
    //       return (<Image  source={require('../images/staff/7501.jpg')} style={{padding: 10,borderRadius: 30,
    //         width: 60,
    //         height: 60,}} /> );
    //         case '7503.jpg':
    //       return (<Image  source={require('../images/staff/7503.jpg')} style={{padding: 10,borderRadius: 30,
    //         width: 60,
    //         height: 60,}} />);
    //         case '7504.jpg':
    //       return (<Image  source={require('../images/staff/7504.jpg')} style={{padding: 10,borderRadius: 30,
    //         width: 60,
    //         height: 60,}} />);
    //         case '7502.jpg':
    //           return (<Image  source={require('../images/staff/7502.jpg')} style={{padding: 10,borderRadius: 30,
    //             width: 60,
    //             height: 60,}} />);
    //   }
    // };
 
    return (
 
      <View style={styles.MainContainer}>

      <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here"
        />
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <View>
            <View style={styles.row}> 
           {/* {this.img(rowData.SPhoto)} */}
               <View>
                   <View style={styles.nameContainer}>
                   <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{rowData.SName}</Text>
                   <Text style={styles.mblTxt}>{rowData.STelephone}</Text>
                   </View>
                   <View style={styles.msgContainer}>
                   <Text style={styles.msgTxt}>ID: {rowData.SID}</Text>
                   <Text style={styles.msgTxt}>{rowData.SPhoto}</Text>
                   
                   </View>
               </View>
               </View>
        </View>}

          enableEmptySections={true}

          style={{marginTop: 10}}
 
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
 MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },

  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   },
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
 
});