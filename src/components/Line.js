import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Line = (props) => {
    const {label = ""} = props;
    const {value = ""} = props;
    return(
        <View style={styles.line}>
            <Text style={[styles.cell, styles.cellLabel, label.length > 10 ? styles.longLabel : null]}> {label}: </Text>
            <Text style={[styles.cell, styles.cellValue]}> {value} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        padding: 10,
    },
    cell: {
        fontSize: 16,
    },
    cellLabel: {
        fontWeight: 'bold',
        flex: 1,
    },
    cellValue: {
        flex: 3,
        textAlign: "left"
    },
    longLabel: {
        fontSize: 10
    }
}); 

export default Line;
