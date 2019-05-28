import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import R from 'res/R'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.introTextStyle}>Splash Screen</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    introTextStyle: {
        fontSize: R.size.textSize.subTitle,
        color: R.colors.primaryBlackColor,
        textAlign: 'center',
        marginBottom: 40,
    },
});

export default SplashScreen;
