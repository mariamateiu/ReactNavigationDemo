import React, { Component } from "react";
import { Button, View, Text, Image, StyleSheet} from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
      }}>
        <Text style={styles.paragraph}>Danish shipping company, active in ocean and inland freight transportation and associated services, such as supply chain management and port operation. </Text>
        
        <Text style={styles.wordBold}> Contact us at +45 33 63 33 63</Text>
      
        </View>
  );
};

const styles = StyleSheet.create ({
  wordBold: {
    fontWeight: 'bold', 
    color: 'black',
    fontSize: 15
  },

  titleBigAndBold: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
    
  },

  subtitle: {
    fontSize: 15,
    fontStyle:'italic',
    
  },

  paragraph: {
    textAlign: 'left',
    fontSize: 20
  }


  
})