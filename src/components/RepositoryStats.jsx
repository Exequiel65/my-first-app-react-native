import { View, StyleSheet, Button } from 'react-native'
import React from 'react'
import StyledText from './StyledText'

const parseThousands = ( value )=>{
  return value >= 1000 ? `${Math.round(value / 100) / 10}k`  : String(value)
}

export default function RepositoryStats(props) {
  console.log(props.teachers)
  return (
    <View style={{ flexDirection: 'column', alignItems: 'flex-start'}}>
      <StyledText align='flex-start' fontWeight='bold'>Profesores: </StyledText>
      {props? props.teachers.map(teach =>(
      <View style={{ flex: 2, flexDirection: 'row' ,justifyContent: 'space-around'}}>
        <StyledText align='center' >{`${teach.firstName} ${teach.lastName} `}</StyledText>
      </View>
        )) : ""}
      <Button title='Ver' style={{margin: 10}} />
    </View>
  )
}

