import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

var styles = require('../BaseStyle');

export default class PageOne extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <View style={styles.welcome}>
            <Text onPress={Actions.pageTwo}>Page Siji</Text>
          </View>
        )
    }
}
