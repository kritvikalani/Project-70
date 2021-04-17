import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }
    render(){
        return(
            <View>
           <View>
               <TextInput
               style={StyleSheet.inputBox}
               placeholder="Title of the Story"
                onChangeText={text => {
                    this.setState ({text: text})
                }}
               />
           </View> 
           <View>
               <TextInput
               multiline= {true}
               style={StyleSheet.inputBox}
               placeholder="Author of the Story"
                onChangeText={text => {
                    this.setState ({text: text})
                }}
               />
           </View>
           <View>
               <TextInput
               style={StyleSheet.inputBox}
               placeholder="Write Story"
                onChangeText={text => {
                    this.setState ({text: text})
                }}
               />
           </View>
           <View>
               <TouchableOpacity>
               style={styles.submitButton}
          <Text style={styles.submitButtonText}>Submit</Text>
               </TouchableOpacity>
           </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
      },
        submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  }
})