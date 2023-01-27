import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function UserHome(){
  
  return(
    <View style={styles.container}>
      <View style={styles.containerOpen}>
        <View style={styles.search}>
          <Icon name="search" size={25} color='#b5b5b5' />
          <TextInput style={styles.searchInput}
          placeholder="Pesquisar..."
          placeholderTextColor="#7c7c7c"
          cursorColor="#c4c4c4"
          />
          <TouchableOpacity style={styles.buttonSearch}>
            <Icon name="arrow-right" size={20} color='#ececec' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
}