import React from 'react'
import { View,Text } from 'react-native'
export default function aboutus({route,navigation}) {
  return (
   <>
    <View>
        <Text>Heelo I am about us page</Text>
        <Text>data recived : {route.params.title}</Text>
    </View>
   </>
  )
}
