import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ErrorItem = (props) => (
    <View style={style.container}>
        <Text style={style.message}> {props.message} </Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: "red",
        alignItems: 'center',
        padding: 15
    },
    message: {
        fontSize: 20,
        color: "#fff",
        elevation: 1,
    }
});

export default ErrorItem;