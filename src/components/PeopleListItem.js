import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import {capitalizeFirstLetter} from '../util';

const PeopleListItem = props => {
    const {people, navigateToPeopleDetail} = props;
    const { title, first, last} = people.name;

    return (
        <ScrollView  style={styles.scrollContainer}>
            <TouchableOpacity onPress={() =>{
                console.log('Clicou em mim!!!', first)
                navigateToPeopleDetail({people});
                
            }}>
                <View style={styles.line}>
                    <Image style={styles.avatar} source = {{uri: people.picture.thumbnail}} />
                    <Text style={styles.lineText}> 
                        {`${
                            capitalizeFirstLetter (title)
                        } ${
                            capitalizeFirstLetter(first)
                        } ${
                            capitalizeFirstLetter (last)
                        }`}
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );    
}
const styles = StyleSheet.create({
    line: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 65,
        paddingLeft: 55,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
 
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        paddingLeft: 15,
        borderRadius: 50

    },
    scrollContainer: {
        backgroundColor: '#ccc'
    }
})

export default PeopleListItem; 