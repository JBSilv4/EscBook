import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import stylesBellAlert from './stylesAlertBell';
import styles from './stylesAlertBellBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Flags from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const dbAlertBox = {
  boxAlert: [
      {
        id: '1',
        data: '25 Março, 2023',
        title: 'Seja Bem-Vindo(a) ao EscBook!',
        message: 
        'Olá, Eu sou a Lara uma Inteligencia Artificial.\n'
        + 'Fui criada para ajudar os programadores, tanto nas suas tarefas quanto nas suas aprendizagem.\n'
        + 'Esse aplicativo foi criado para ajudar programadores.'
      },
      {
        id: '2',
        data: '27 Janeiro, 2023',
        title: 'Venha Fazer Parte da Equipe!',
        message: 
        'Venha fazer parte da nossa equipe. \n'
        + 'Você que é programador ou programadora ou UI/UX Desiner, \nse junte a nossa equipe da EscBook.'
      },
    ]
}

export function AlertBell(){
  const contagemAlert = dbAlertBox.boxAlert.length;
  
  return(
    <View style={[stylesBellAlert.boxAlert, {opacity: contagemAlert == 0 ? 0 : 1}]}>
      <Text style={stylesBellAlert.value}>{contagemAlert}</Text>
    </View>
    )
}

export function BellAlertBox(){
  const navigation = useNavigation();
  
  const alertBox = (item) => {
    return(
      <View style={styles.containerAlertBox}>
        <View style={styles.alertBox}>
        
          <View style={styles.alertBoxHeader}>
            <Text style={styles.dataText}>{item.data}</Text>
            <View style={styles.boxFlags}><Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>DEV EBK</Text></View>
          </View>
          
          <Text style={styles.alertBoxTitle}>{item.title}</Text>
          <View style={{height: 135}}>
            <Text style={styles.alertBoxMessage}>{item.message}</Text>
          </View>
          
          <View style={styles.iconAlertBox}>
              <Image source={require('./LaraDev.png')} style={styles.userIcon}/>
              <Text style={styles.userName}>LaraDev</Text>
          </View>
          
        </View>
      </View>
      )
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" size={30} color="#161616" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mensagens</Text>
      </View>
      
      <View style={styles.barsHorizontal}></View>
      
      <View>
        <FlatList
        data={dbAlertBox.boxAlert}
        renderItem={({item}) => alertBox(item)}
        keyExtractor={item => item.id}
        />
      </View>
    </View>
    )
}