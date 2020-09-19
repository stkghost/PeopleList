import React from 'react'; 
import {FlatList, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem.js';


const PeopleList = props => {
    const {peoples, onPressItem } = props;

    // const items = peoples.map(people => {
    //     return ( 
    //         <PeopleListItem 
    //             key= {people.name.first}
    //             people={people} 
    //             navigateToPeopleDetail={onPressItem}/>
    // );

    return ( 
        <FlatList style={styles.container}
            data={peoples}
            renderItem={({  item  }) => 
                (<PeopleListItem 
                    // key= {people.name.first}
                    people={item} 
                    navigateToPeopleDetail={onPressItem}/>
                )}
            />
    )

};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc'
    }

})

export default PeopleList;