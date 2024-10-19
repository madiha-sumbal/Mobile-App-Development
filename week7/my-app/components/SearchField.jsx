import React from 'react'
import { Text, TextInput , View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SearchField() {
  return (
   <View style={styles.serachWrapper}>
   <Icon  style={{marginLeft:4}} name="search"></Icon>
   <TextInput placeholder='search conditions'  style={styles.searchInput}></TextInput>
   </View>
  )
}
const styles = StyleSheet.create({
  serachWrapper:{
    
  display:'flex',
  flexDirection:'row',
  
  
  alignItems:'center',
  backgroundColor: 'white',
  borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width:'80%',
    height:40,
    

  },
  searchInput:{
   marginLeft:5
  }
  
});

