import { View, StyleSheet } from "react-native";
import React from "react";
import StyledText from './StyledText';
import theme from "../theme";
export default function RepositoryItemHeader(props) {
  return (
    <View style={styles.card}>
      <View style={styles.descrit} >
        <StyledText fontWeight="bold">
            Campo: {props.campo}
        </StyledText>
        <StyledText color='secondary' >{props.name}</StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card :{
        flexDirection : "row",
        paddingBottom: 2
    },
    descrit: {
        flex : 1
    },
    language :{
      padding: 4,
      color : theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf : 'flex-start',
      borderRadius : 4,
      overflow: 'hidden',
      marginTop : 4,
      marginBottom : 4
    },
    image : {
      width: 48,
      height: 48,
      borderRadius: 4
    }
})