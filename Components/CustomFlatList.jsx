import React, { useMemo, useState } from "react";
import { Text, View, FlatList, Button, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import { getResualeHeight } from "../utils/Utils";

const itemHeight = 150;

const CustomFlatList = props => {

    const [currentItem, setCurrentItem] = useState('');
    const [username, setUsername] = useState('Vaibhav Chawla');

    const usableHeight = getResualeHeight();


    const totalItems = Math.floor(usableHeight / 150);

    console.log(totalItems);

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
    }, {
        id: 'lsjniowhreiglrgr',
        text: 'Fifth Item 5'
    }, {
        id: 'lkngknwrglknwrgl',
        text: 'Sixth Item 6'
    }, {
        id: 'kljwgowjrkjwbrgubwrg',
        text: 'Seventh Item 7'
    }, {
        id: 'wejbguiwbeuigbwuegbiw',
        text: 'Eighth Item 8'
    }, {
        id: 'liwlni4giw4ng',
        text: 'Fifth Item 9'
    }, {
        id: 'kjbsgbrgbkurbgkwb',
        text: 'Sixth Item 10'
    }, {
        id: 'jksnvknskvnklsnlk',
        text: 'Seventh Item 11'
    }, {
        id: 'jnvcjkvbnjkdnkvnb',
        text: 'Eighth Item 12'
    }, {
        id: 'liwlni4giw4ngljehkuwhe',
        text: 'Fifth Item 13'
    }, {
        id: 'kjbsgbrgbkurbgkwbjsnegkeng',
        text: 'Sixth Item 14'
    }, {
        id: 'jksnvknskvnklsnlklkewnglknweg',
        text: 'Seventh Item 15'
    }, {
        id: 'jnvcjkvbnjkdnkvnb;oweg;ojewgojew;og',
        text: 'Eighth Item 16'
    }]

    const changeCurrentItem = (id) => {
        setCurrentItem(id)
    }

    return (
        <FlatList
            bounces={Data.length ? true : false}
            ItemSeparatorComponent={({ styles, highlighted, leadingItem }) => {
                return <View style={[{
                    height: 10,
                    backgroundColor: highlighted ? 'orange' : 'transparent'
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
            // ListHeaderComponent={() => {
            //     return <Text>
            //         Items Header Container
            //     </Text>
            // }}
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
            // FlatList will first render intialNumOfItems and by default the default number of items will never be unmounted from the screen, than if there is space in the screen than more items will be rendered, IDEALLY -> the value should represent the items that can able to fit on the screen
            // initialNumToRender={1}
            initialNumToRender={totalItems}
            initialScrollIndex={0}
            inverted={false}
            // numColumns={2}
            // columnWrapperStyle={{
            //     backgroundColor: 'blue',
            //     justifyContent: 'space-between',
            //     alignItems: 'center',
            //     height: 100
            // }}
            data={Data}
            renderItem={({ item, index, separators }) => {
                return <Item onPressOut={() => {
                    separators.unhighlight()
                }} onPressIn={() => {
                    changeCurrentItem(item.id);
                    if (index === 1) {
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


const Item = ({ text, backgroundColor, onPressIn, onPressOut }) => {

    return (
        <View style={{
            height: itemHeight
        }}>

            <TouchableOpacity onPressOut={onPressOut} style={{
                backgroundColor: 'orange',
                flex: 1
            }} onPressIn={() => {
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
        </View>
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

    In FlatList the SCROLL TO TOP optimization means the first intialNumToRender will always be rendered on the screen and will never be out of the memory, but when we set the intialScrollIndex SCROLL TO TOP optimization does not work, means the first n items will not be maintained.

    when we provide "intialScrollIndedx" we have to provide the FlatList the "getItemLayout" that describes the height of the element so that FlatList can move to the element based on the sizing ( always include header + ItemSeparatorCompnent size )

    Good Practice always renders the items present inside the FlatList based on the screen size and if we does not provide intialScrollIndex then the intialNumToRender always remains in the memory ( Scroll To Top Optimization ), if we mention the items < screen size items then also first intialNumToRender items get rendered and then other

    by default FlatList calculates the size / height of each element based on the inside it, and when we provide getItemLayout

*/