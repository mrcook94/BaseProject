import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export class BasicTextButton extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func,
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.buttonStyle}
                disabled={this.props.disabled}
                >
                <Text style={this.props.textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export class BasicImageButton extends Component {
    static propTypes = {
        imageStyle: PropTypes.object,
        onPress: PropTypes.func,
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[this.props.buttonStyle, styles.buttonLeft]}>
                <Image
                    source={this.props.imageSource}
                    style={this.props.imageStyle}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})