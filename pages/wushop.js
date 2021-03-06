import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert ,TextInput,StyleSheet,FlatList,Image,
  TouchableOpacity,} from 'react-native';
  import { Container, Header, Content, Footer, FooterTab, Icon, Badge ,Button,Text} from 'native-base';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Mybuttondel from './components/Mybuttondel';
import Mybuttonedit from './components/Mybuttonedit';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'wushop.db' });
 
export default class m1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: 'Gaidmanee',
      comment: '',
      img: '',
      time: '',
      FlatListItems: [],
      post_id: '',
    };

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM post ORDER BY post_id DESC;', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };

  register_user = () => {
    // alert('come in');
    this.setState({time:new Date()})
    var that = this;
    const { user_name } = this.state;
    const { comment } = this.state;
    const { img } = this.state;
    const { time } = this.state;
    // alert(time);
    if (user_name) {
      // alert('come in 1');
      if (comment) {
        // alert('come in 2');
        if (img) {
          alert('come in 3');
          db.transaction(function(tx) {
            tx.executeSql('INSERT INTO post (user_name, comment, img, time) VALUES (?,?,?,?)',
              [user_name, comment, img, time],
              (tx, results) => {
                // console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Post Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Post Failed');
                }
              }
              ,(error) => { alert(JSON.stringify(error)) }
            );
          });
        } else {
          alert('Please fill Image link');
        }
      } else {
        alert('Please fill comment');
      }
    } else {
      alert('Please Login');
    }
  };
  // placeholder="Enter Name"
  deletepost = (post_id) => {
    // alert(post_id);
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  post where post_id=?',
        [post_id],
        (tx, results) => {
          // console.log('Results', results.rowsAffected);
          // alert(JSON.stringify(results));
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Post deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => this.props.navigation.navigate('m1'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Delete error Post Id');
          }
        }
      );
    });
};


  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text style={{marginLeft: 50,fontSize: 20}}>Post</Text>
        <TextInput
          style={styles.textbox}
          placeholder="Profile"
          underlineColorAndroid='transparent'
          onChangeText={user_name => "Gaidmanee"}
          value={this.state.user_name}
        />
        
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/speech-bubble/ultraviolet/50'}}/>
          <TextInput style={[ styles.messageInput]}
              placeholder="comment"
              underlineColorAndroid='transparent'
              onChangeText={(comment) => this.setState({comment})}/> */}
        <TextInput
          style={styles.textbox}
          placeholder="comment"
          underlineColorAndroid='transparent'
          onChangeText={(comment) => this.setState({comment})}
          // value={this.state.text}
        />
        <TextInput
          style={styles.textbox}
          placeholder="Link image"
          underlineColorAndroid='transparent'
          onChangeText={(img) => this.setState({img})}
          // value={this.state.text}
        />
            
          </KeyboardAvoidingView>
          <Mybutton
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
  
        <FlatList style={styles.list}
          data={this.state.FlatListItems}
          keyExtractor= {(item) => {
            return item.post_id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                  {/* <View style={styles.row}> */}
                  <Image style={styles.icon} source={{uri: 'https://png.icons8.com/metro/75/3498db/administrator-male.png'}}/><Text style={styles.title}>{item.user_name}</Text>
                  {/* </View> */}
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                  </View>
                </View>

                <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('edit')}}><Image style={styles.cardImage} source={{uri:item.img}}/></TouchableOpacity>

                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/e74c3c/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={styles.socialBarSection} key={item.post_id}>
                      <TouchableOpacity style={styles.socialBarButton} onPress ={()=>{this.props.navigation.navigate('edit',{post_id: item.post_id})}}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/material-rounded/24/000000/edit.png'}}  />
                        <Text style={styles.socialBarLabel}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton} onPress={() => this.deletepost(item.post_id)}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/48/000000/recycle-bin.png'}}/>
                        <Text rkType='primary4 hintColor' style={styles.socialBarLabel}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
        </ScrollView>
        <Content />
          <Footer>
          <FooterTab style = {{ backgroundColor: '#ffcc33', color:'#ffffff'}}>
            <Button active style={{backgroundColor:'##B6B900',color:'#eeeeee'}} vertical >
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon style={{color:'#ffffff'}}  name="home" />
              <Text style={{color:'#ffffff'}}>Home</Text>
            </Button>
            <Button style={{backgroundColor:'##B6B900',color:'#ffffff'}} vertical  onPress={() => this.props.navigation.navigate('Post')}>
              <Icon style={{color:'#ffffff'}} name="book" />
              <Text style={{color:'#ffffff'}}>Post</Text>
            </Button>
            <Button style={{backgroundColor:'##B6B900',color:'#ffffff'}} vertical onPress={() => this.props.navigation.navigate('chat')}>
              {/* <Badge ><Text>2</Text></Badge> */}
              <Icon style={{color:'#ffffff'}} name="chatboxes" />
              <Text style={{color:'#ffffff'}}>Chat</Text>
            </Button> 
             <Button style={{backgroundColor:'##B6B900',color:'#ffffff'}} vertical onPress={() => this.props.navigation.navigate('profile')}>
              <Icon style={{color:'#ffffff'}} name="contact" />
              <Text style={{color:'#ffffff'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headname: {
    textAlign: 'center',
  },
  textbox:{
    height: 40, 
    borderColor: 'gray',
     borderWidth: 1,
     marginTop: 10,marginLeft: 50,
      marginRight: 50,
      borderRadius: 15,
      marginBottom: 10 ,
  },
  layoutrow:{flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:0,
    height:90
  },
    textboxs:{
      width: 100, 
      borderColor: 'gray',
       borderWidth: 1,
       marginTop: 10,marginLeft: 2,
        marginRight: 2,
        borderRadius: 15,
        marginBottom: 10 ,
    },
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
      paddingHorizontal: 17,
      backgroundColor:"#ffffff",
    },
    separator: {
      marginTop: 10,
    },
    /******** card **************/
    card:{
      shadowColor: '#000000',
      shadowOffset: {
        width: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 8,
      backgroundColor:"#ffffff",
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    cardImage:{
      flex: 1,
      height: 150,
      width: null,
    },
    /******** card components **************/
    title:{
      fontSize:18,
      flex:1,
    },
    time:{
      fontSize:13,
      color: "#808080",
      marginTop: 5
    },
    comment:{
      fontSize:13,
      // color: "#808080",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
    },
    socialBarSection: {
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarSection1: {
      flexDirection: 'row',
    },
    socialBarlabel: {
      marginLeft: 8,
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },
    socialBarButton:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  
});