import React, { useCallback, useEffect, useState } from "react";
import { Text, View, FlatList, Button, TouchableOpacity, ActivityIndicator } from "react-native";

const MyFlatList = props => {

    const [data, setData] = useState([]);

    const fakerAPI = useCallback(() => {
        setTimeout(function () {
            const data = [{
                id: 'orange',
                fruitName: 'orange'
            }, {
                id: 'Apple',
                fruitName: 'Apple'
            }, {
                id: 'Banana',
                fruitName: 'Banana'
            }]

            setData(old => [...old, {
                id: 'Grapes',
                fruitName: 'Grapes'
            }, ...data])
        }, 1 * 1000);
    })

    useEffect(fakerAPI, []);

    return (
        <View style={{
            flex: 1
        }}>

            <FlatList
                bounces={true}
                contentContainerStyle={{
                    backgroundColor: 'white',
                }}
                data={data}
                ItemSeparatorComponent={MySeparatorComponent} // can be React Element or React Component
                keyExtractor={(item) => item.id}
                renderItem={({ item, separators, index }) => (
                    <RenderItem fruitName={item.fruitName} index={index} separators={separators} />
                )}
                ListEmptyComponent={EmptyComponent}
                ListFooterComponent={FooterComponent}
                ListFooterComponentStyle={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    marginTop: 30,
                    backgroundColor: 'orange',
                }}
                ListHeaderComponent={HeaderComponent}
                ListHeaderComponentStyle={{
                    marginBottom: 30,
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: 'orange'
                }}
            />

        </View>
    )
}


export default MyFlatList;


// by-default highlighted and leadingItem props are provided
const MySeparatorComponent = ({ highlighted, leadingItem, style = {} }) => {

    console.log(highlighted);

    console.log(style);

    console.log(leadingItem);

    return <View style={{
        backgroundColor: highlighted ? 'orange' : 'aquamarine',
        borderColor: 'yellow',
        height: 10,
        ...style
    }}>

    </View>
}

const RenderItem = ({ fruitName, index, separators }) => {
    const { highlight, unhighlight, updateProps } = separators;

    return <View style={{
        padding: 20,
        backgroundColor: 'skyblue'
    }}>
        <TouchableOpacity style={{
            backgroundColor: 'pink'
        }} onPressIn={() => {
            highlight()
            updateProps('leading', {
                style: {
                    height: 100,
                    borderWidth: 10
                }
            })
        }} onPressOut={() => {
            unhighlight()
            updateProps('leading', {
                style: {

                }
            })
        }}>

            <Text>
                {fruitName}
            </Text>

        </TouchableOpacity>
    </View>
}

const EmptyComponent = () => {

    // animating props makes the loader animating
    // hidesWhenStopped props hides the Element when animating is false
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ActivityIndicator animating={true} size={"large"} hidesWhenStopped={true} color={'red'} />
        </View>
    )
}

const FooterComponent = () => {

    return <View style={{
        backgroundColor: 'coral',
        alignItems: 'center'
    }}>
        <Text >
            End of the List
        </Text>
    </View>
}

const HeaderComponent = () => {

    return <View style={{
        backgroundColor: 'coral',
        alignItems: 'center'
    }}>
        <Text>Start of the List</Text>
    </View>
}



/*

    FlatList provides us Way to list Scrollable items that has similar structure with extra features like
    1. horizontal
    2. Header Support
    3. Footer Support
    4. Seperator Component
    5. Pull To Refresh
    6. Scroll loading
    etc


    FlatList is PURE-COMPONENT that means it will only re-renders when the data it is having gets changed / only shallow-equal checking is done

    shallow-equal means checking the value of the props not the reference,

    FlatList follows shallow-equal behaviour when comparing the data, => if the data is not changed then it will not re-render

    FlatList is a wrapper across VirtulizedList => inherits it props and also gets props from ScrollView

    The ItemSeparatorComponent gets updated in a optimized way, it will be updated when the we update using separators.hightlight or separators.unhighlight or more Generic using separators.updateProps


    TouchableOpacity PressEvent -> onPressIn -> onPressout -> onPress 


    React Component means function that returns JSX Element
    React Element means JSX Element only
*/