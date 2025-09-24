import React from "react";
import { FlatList, View, Text, Button, TextInput } from "react-native";


const CustomFlat = props => {
    
    return (
        <FlatList 
            data={[{
                key: 'First'
            }, {
                key: 'second',
            }, {
                key: 'third',
            }, {
                key: 'fourth',
            }, {
                key: 'fifth',
            }]}
        
            renderItem={({item, index}) => {
                return <Card value={item.key}/>
            }}
        />
    )
}



const Card = ({value}) => {
    return (
        <>
            <Text>{value}</Text>
        </>
    )
}


export default CustomFlat;

/*

    FlatList is similar to ScrollView but more efficient and takes similar type of data inside it (the view that it makes scrolling should belong to the same structure ) . it requires data and renderItem as props, data takes the "info" in the form of array and renderItem calls the item to be rendered on the screen for each dataItem

*/