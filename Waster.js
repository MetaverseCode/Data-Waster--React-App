
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  TouchableOpacity,
  Pressable,
  View,
} from 'react-native';
export default class Waster extends Component{
 state = {
  data1 : "Start",
  data2 : "Stopped"

 }
call = () => {
  fetch('https://sao.snu.ac.kr/datawaster/dummy15?' + Math.random(), {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }}).then(() => {
    console.log("success")
  })
  .catch((error) => {
    console.log("error")
  })
}
Start = () => {
  if(this.state.data1 == "Start"){
    this.aa = setInterval(this.call , 0.0000001)
    this.setState({
      data1 : "Stop",
      data2: "Started"
    })
  }
  else if (this.state.data1 == "Stop"){
    clearInterval(this.aa)
    this.setState({
      data1 : "Start",
      data2: "Stopped"
    })
  }
}
  render(){
    return(
      <View>
       <TouchableOpacity
        activeOpacity={0.6} 
       onPress = {this.Start} 
       style={styles.button11}>
      <Text style = {styles.textofbtn}>{this.state.data1}</Text>
    </TouchableOpacity>
    <Text
    style={styles.text}
    >{this.state.data2}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
text: {
  textAlign : "center",
  marginTop: 200,
  fontSize: 100,
},
  button11: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'dodgerblue',
    margin: 20,
    marginTop:40
  },
  textofbtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
