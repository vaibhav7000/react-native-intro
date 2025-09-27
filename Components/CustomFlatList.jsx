import React, { useState } from "react";
import { Text, View, FlatList, Button, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

const CustomFlatList = props => {

    const [currentItem, setCurrentItem] = useState('');
    const [username, setUsername] = useState('Vaibhav Chawla');
    const itemHeight = 200;

    const Data = [{
        id: 'lsjnlrgr',
        text: 'First Item 1'
    }, {
        id: 'klnelkngeg',
        text: 'Second Item 2'
    }, {
        id: 'lknrglkner',
        text: 'Third Item 3'
    }, {
        id: 'ksnrkgnlwgnr',
        text: 'Fourth Item 4'
    }]

    const changeCurrentItem = (id) => {
        setCurrentItem(id)
    }

    return (
        <FlatList
            bounces={Data.length ? true : false}
            ItemSeparatorComponent={({styles, highlighted, leadingItem}) => {
                console.log(leadingItem)
                return <View style={[{
                    height: 10,
                    backgroundColor: highlighted ? 'orange': 'transparent'
                }, styles]}>

                </View>
            }}
            ListEmptyComponent={() => {
                return (<Text>
                    Empty List
                </Text>)
            }}
            ListFooterComponent={() => {
                // this will be wrapped inside the View that React Native will provide
                return <Text>
                    End of the list
                </Text>
            }}
            // providing the styling for the React native Footer View Component
            ListFooterComponentStyle={{
                backgroundColor: 'brown',
                alignItems: 'center',
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                borderRadius: 20
            }}
            ListHeaderComponent={() => {
                return <Text>
                    Items Header Container
                </Text>
            }}
            ListHeaderComponentStyle={{
                backgroundColor: 'brown',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                borderRadius: 20
            }}

            getItemLayout={(data, index) => ({
                length: itemHeight,
                offset: ( itemHeight + 10 ) * index,
                index
            })}
            // numColumns={2}
            // columnWrapperStyle={{
            //     backgroundColor: 'blue',
            //     justifyContent: 'space-between',
            //     alignItems: 'center',
            //     height: 100
            // }}
            data={Data}
            renderItem={({item, index, separators}) => {
                return <Item onPressOut={() => {
                    separators.unhighlight()
                }} onPressIn={() => {
                    changeCurrentItem(item.id);
                    if(index === 1) {
                        separators.updateProps('trailing', {
                            styles: {
                                backgroundColor: 'yellow'
                            }
                        })
                    }
                    separators.highlight()
                }} text={item.text} backgroundColor={item.id === currentItem ? 'skyblue' : 'pink'} />
            }}
            keyExtractor={item => item.id}
            extraData={{
                currentItem
            }}
        />
    )
}


const Item = ({text, backgroundColor, onPressIn, onPressOut}) => {

    return (
        <TouchableOpacity onPressOut={onPressOut} onPressIn={() => {
            onPressIn()
        }}>
            <View style={[styles.item, {
                backgroundColor: backgroundColor
            }]}>
                <Text>
                    {text}
                </Text>
            </View>        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

    }, 
    item: {
        backgroundColor: 'pink',
        padding: 20,
        fontSize: 30
    }
})


export default CustomFlatList;


/*

    "memo" in React allows the Component to only gets re-render when it data actually get updated and hence make the Screens more optimized. It is Kind of making the Component as "PURE COMPONENT" 

    "FlatList" bydefault is "Pure Component" that means it will only gets updated when its data updated but there is way using which we can update that using extraData prop


*/