import React from 'react';
import {View, StyleSheet, ViewPropTypes, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {} from 'deprecated-react-native-prop-types'
import StyledText from './StyledText';
import Constants from 'expo-constants'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native';



const AppBarTap = ({children, to})=>{
    const { pathname } = useLocation()
    const active = pathname === to
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles} >{children}</StyledText>
        </Link>
    )
}



const AppBar = () => {
    
    return (
        <View style={styles.appBar}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTap to='/' >Repositories</AppBarTap>
                <AppBarTap to='/signin' >Sign In</AppBarTap>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    appBar :{
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft : 10
    },
    text: {
        color: theme.appBar.secondaryText,
        paddingHorizontal : 10
    },
    scroll:{
        paddingBottom : 15
    },
    active :{
        color : theme.appBar.primaryText
    }
})

export default AppBar;
