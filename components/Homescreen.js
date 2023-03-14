import React from "react";
import { Button,View,Text,Image, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
          }}>

        <Image 
        source={require('./maersk.png')}
        style={{
          height: 100,
          width: 100
        }} >
        </Image>
      <Text style={styles.titleBigAndBold}> A.P. Møller - Maersk </Text>
      <Text style={styles.subtitle}> Integrated Container Logistics & Supply Chain Services </Text>

          </View>
        <Button
          title="About us"
          onPress={() => navigation.navigate("About")}
        />
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
    textAlign: 'center',
    fontSize: 25
  }


  
})