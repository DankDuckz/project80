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
} from 'react-native';
import axios from 'axios';

export default class DailyPic extends Component {
  constructor() {
    super();

    this.state = {
      APOD: {},
    };
  }

  getAPOD = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=e3DzRrbCVFvyduZWXtBkCXVx7eb1E7WTMywySeep'
      )
      .then((response) => {
        this.setState({ APOD: response.data });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getAPOD();
  }

  render() {
    if (Object.keys(this.state.APOD).length == 0) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/stars.gif')}
            style={styles.backgroundImage}>
            <Text style={styles.titleText}>Daily Pic</Text>
            <Text style={styles.titleText}>{this.state.APOD.title}</Text>
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() =>
                Linking.openURL(this.state.APOD.url).catch((err) =>
                  console.error("Couldn't load message", err)
                )
              }>
              <View style = {styles.container}>
                <Image
                  source={require('../assets/play-video.png')}
                  style={{ width: 50, height: 50 }}></Image>
              </View>
            </TouchableOpacity>

            <Text style = {styles.explanationText}>{this.state.APOD.explanation}</Text>
          </ImageBackground>
        </View>
      );
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
    color: 'white',
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
    color:'white'
      }
});
