import React, { memo, useMemo } from "react";
import { SectionList, View, Text, Button, TextInput, StyleSheet } from "react-native";


const CustomSection = props => {

    const data = [{
        title: 'Fruits', // this property name can be different
        data: ['Apple', 'Apple', 'Apple'],
    }, {
        title: 'Vegetables',
        data: ['Carrot', 'Carrot', 'Carrot'],
    }, {
        title: 'Others',
        data: ['Bread', 'Bread', 'Bread'],
    }]

    return (
        <SectionList 
            style={styles.container}
            sections={data}
            renderItem={(props) => <Card value={props.item} />}
            renderSectionHeader={({section}) => <Header value={section.title} /> }
            keyExtractor={({index}) => index}
            bounces={false}
        />
    )
}

const Header = props => {
    return <Text style={styles.headerStyles}>{props.value}</Text>
};

const Card = props => {
    return <Text>{props.value}</Text>
}


export default CustomSection

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    headerStyles: {
        fontSize: 20,
        fontWeight: 500,
        color: "gray",
        backgroundColor: "green",
        textAlign: "center"
    },
})

/*

    SectionList is similar to FlatList but enable to break the data in futher with headersStyles, works just like the FlatList,

    Both "FlatList" and "SectionList" has same properties as ScrollView but there purpose of how they solve the problem is different,

    All the scrolling container like ScrollView, FlatList and SectionList takes the complete screen height

*/