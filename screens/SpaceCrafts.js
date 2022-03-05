import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  FlatList
} from 'react-native';
import axios from 'axios';

export default class SpaceCrafts extends Component {
  constructor() {
    super()
    this.state = {
      aircrafts:{}
    }
  }

  getData = () => {
    axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/').then(response => {
      this.setState({aircrafts:response.data.results})
      console.log(this.state.aircrafts)
    }).catch(error => {
      console.log(error.message)
    })
  }

  keyExtractor = (item, index) => index.toString()
  
  renderItem = ({item}) => {
    return(
      <View style = {{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
      <Image source = {{uri:item.agency.image_url}} style = {{width:'100%',height:200,marginTop:15,marginBottom:15,marginRight:10}}></Image>
      <Text style = {{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
      <Text style = {{color:'#696969'}}>{item.agency.name}</Text>
      <Text>DESCRIPTION</Text>
      <Text style = {{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
      </View>
    )
  }

  componentDidMount() {
    this.getData()
  }

    render(){
      if (Object.keys(this.state.aircrafts).length == 0) {
        return(
          <View>
            <Text style = {{alignSelf:'center',fontSize:30}}>Loading...</Text>
          </View>
        )   
      }
      else {
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View styles = {{flex:0.25}}>
                  <Text style = {styles.titleText}>Space Crafts</Text>
                </View>
                <View styles = {{flex:0.75}}>
                  <FlatList
                  keyExtractor = {this.keyExtractor}
                  data = {this.state.aircrafts}
                  renderItem = {this.renderItem}
                  />
                </View>
            </View>
        )
      }
       
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf:'center',
  },
  listContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    marginTop: 20,
    alignSelf:'center'
  },
  explanationText:{
    color:'blue'
    }
});
