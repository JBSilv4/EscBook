import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function ButtonDouble(){
  const [select, setSelect] = useState("Mensal");
  const [bool, setBool] = useState(true);
  const animaPlano = useRef(new Animated.Value(2)).current;
  const [styleColor, setStyleColor] = useState("#fff")
  
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(animaPlano, {
      toValue: bool == true ? 75 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  
  function verificationPlano(){
    if(bool == true){ setSelect("Dark"); setStyleColor("#232323") }
    if(bool == false){ setSelect("Light"); setStyleColor("#fff")}
    fadeIn()
    setBool(!bool);
  }
  
  return(
    <View style={[styles.container, { backgroundColor: styleColor}]}>
      <View style={styles.buttonBack}>
        <Text style={styles.buttonLeft} onPress={() => verificationPlano()}>Light</Text>
        <Text style={styles.buttonRight} onPress={() => verificationPlano()}>Dark</Text>
        <Animated.View style={[styles.selectButton, {
          left: 0,
          transform: [
            {translateX: animaPlano}
          ]
        }]}><Text style={styles.selectButtonText}>{select}</Text></Animated.View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  buttonBack: {
    backgroundColor: '#d4d4d4',
    height: 50,
    width: 174,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50
  },
  buttonRight: {
    marginLeft: 30,
    marginRight: 20,
    textAlign: 'center',
    height: '100%',
    paddingTop: 15,
    fontWeight: 'bold',
    color: '#6d6d6d'
  },
  buttonLeft: {
    marginRight: 30,
    marginLeft: 20,
    textAlign: 'center',
    height: '100%',
    paddingTop: 15,
    fontWeight: 'bold',
    color: '#6d6d6d'
  },
  selectButton: {
    backgroundColor: '#4b00c7',
    height: '100%',
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectButtonText: {
    fontWeight: 'bold',
    color: '#fff'
  }
});