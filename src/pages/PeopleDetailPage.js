import React from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {

    render(){
        const {people} = this.props.navigation.state.params;

        return(
            <ScrollView style={styles.container}>
                <Image source={ { url: people.picture.large } } style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <Line label="Email" value={people.email} />
                    <Line label="Cidade" value={people.location.city} />
                    <Line label="Estado" value={people.location.state} />
                    <Line label="Tel" value={people.phone} />
                    <Line label="Cel" value={people.cell} />
                    <Line label="Nacionalidade" value={people.nat} />
                </View>
            </ScrollView>
        );
    };

}

const styles =  StyleSheet.create({
    container: {
        padding: 20
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    avatar: {
        aspectRatio: 1
    }
});