import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RepositorieList from './RepositorieList';
import AppBar from './AppBar';
import { Switch, Route } from 'react-router-native'
import Login from '../pages/login';
const Main = () => {
    return (
        <View style={{ flex : 1}} >
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositorieList />
                </Route>
                <Route path='/signin' exact>
                    <Login />
                </Route>
            </Switch>
        </View>
    );
}

export default Main;
