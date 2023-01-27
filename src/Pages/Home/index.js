import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconT from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import UserHome from './Components/UserHome';
import { AlertBell } from '../../Functions/AlertBell';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.viewProfile}>
        
        <View style={{
          flexDirection: 'row',
          position: 'relative',
          top: -20
        }}>
        <View style={styles.userIcon}></View>
        
        <Text style={styles.textApresent}>
          Olá,{'\n'}
          <Text style={styles.textUsername}>Jackson Barbosa! 👋</Text>
        </Text>
        
        <View style={styles.viewButtonsHeader}>
          <TouchableOpacity style={styles.buttonHeader} onPress={() => navigation.navigate('BellAlert')}><AlertBell/><IconT name="bell" size={20} color={styles.buttonHeaderText.color} /></TouchableOpacity>
          <TouchableOpacity style={styles.buttonHeader}><Icon name="bars" size={20} color={styles.buttonHeaderText.color} /></TouchableOpacity>
       </View>
       </View>
       
       <View style={{
         width: '100%',
         position: 'absolute',
         left: 18,
         top: 108
       }}>
          <UserHome/>
       </View>
      </View>
      
      <View style={{height: 540}}>
        <ScrollView>
          
          <View style={styles.boxCommunity}>
            <View style={styles.headerBox}>
              <Text style={styles.titleBox}>Comunidade</Text>
              <View style={{
                alignItems: 'flex-end',
                position: 'absolute',
                left: 320
              }}>
                <TouchableOpacity style={{}}><Text style={{textAlign: 'right', color: '#c2c2c2', fontWeight: 'bold', fontSize: 16}}>Ver Todos <Icon name="arrow-right" size={15} color={styles.buttonHeaderText.color} /></Text></TouchableOpacity>
              </View>
            </View>
          
            <View style={styles.resultBox}></View>
          
          </View>
          
          <View style={styles.boxCommunity}>
            <View style={styles.headerBox}>
              <Text style={styles.titleBox}>Cursos</Text>
              <View style={{
                alignItems: 'flex-end',
                position: 'absolute',
                left: 320
              }}>
                <TouchableOpacity style={{}}><Text style={{textAlign: 'right', color: '#c2c2c2', fontWeight: 'bold', fontSize: 16}}>Ver Todos <Icon name="arrow-right" size={15} color={styles.buttonHeaderText.color} /></Text></TouchableOpacity>
              </View>
            </View>
          
            <View style={styles.resultBox}></View>
          
          </View>
      
          
        </ScrollView>
      </View>

    </View>
    )
}