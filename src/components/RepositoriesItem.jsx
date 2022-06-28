import { View, StyleSheet } from "react-native";
import React from "react";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";

export default function RepositoriesItem(props) {
  return (
    <View
      key={props.id}
      style={styles.container}
    >
      <RepositoryItemHeader {...props}/>
      <RepositoryStats {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
    container : { 
        padding: 20, 
        paddingBottom: 5, 
        paddingTop: 5,
        marginBottom: 30 
    },
    language :{
      padding: 4,
      color : theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf : 'flex-start',
      borderRadius : 4,
      overflow: 'hidden'
    },
    image : {
      width: 48,
      height: 48,
      borderRadius: 4
    }
})