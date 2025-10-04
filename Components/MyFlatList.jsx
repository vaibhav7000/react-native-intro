import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, View, FlatList, Button, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native";

const MyFlatList = props => {

    const [data, setData] = useState([]);

    const [refresh, setRefresh] = useState(false);

    const flatListRef = useRef();

    const firstTimeLoad = useRef(true);


    const dimensionData = useMemo(() => {
        const widthWindow = Dimensions.get('window').width;
        const heightWindow = Dimensions.get('window').height;

        return {
            height: heightWindow,
            width: widthWindow
        }
    }, []);

    const singleItemSize = useMemo(function () {
        return 100;
    }, [])

    const initialNumToRender = useMemo(function () {
        return Math.floor(( Math.floor(dimensionData.height - 100) ) / ( singleItemSize + 10 ));
    }, [])


    const fakerAPI = useCallback(() => {
        if(!firstTimeLoad.current) {
            setRefresh(true);
        } else {
            firstTimeLoad.current = false;
        }
        setTimeout(function () {
            const fruitList = [
                'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple',
                'Grapes', 'Strawberry', 'Peach', 'Watermelon', 'Kiwi',
                'Papaya', 'Blueberry', 'Cherry', 'Lemon', 'Lime',
                'Coconut', 'Avocado', 'Pear', 'Plum', 'Fig'
            ];

            const data = [];

            for (let i = 0; i < 20; i++) {
                const fruit = fruitList[Math.floor(Math.random() * fruitList.length)];
                data.push({
                    id: fruit.toLowerCase() + '_' + i,  // ensure uniqueness
                    fruitName: fruit
                });
            }

            setData(old => [...data])
            setRefresh(false);
        }, 1 * 1000);
    })

    useEffect(fakerAPI, []);

    useEffect(function() {

        setInterval(function() {
            if(flatListRef.current) {
                flatListRef.current.flashScrollIndicators()
            }
        }, 2 * 1000)
    });

    const scrollToEnd = useCallback(function() {
        if(flatListRef.current) {
            flatListRef.current.scrollToEnd({
                animated: true
            })
        }
    }, []);

    const scrollToLastIndex = useCallback(function() {
        if(flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: Math.floor(data.length / 2),
                animated: true,
                viewPosition: 1,
            })
        }
    }, [data]);


    return (
        <View style={{
            flex: 1
        }}>

            <FlatList
                ref={ref => {
                    flatListRef.current = ref
                }}
                bounces={true}
                contentContainerStyle={{
                    backgroundColor: 'white',
                    flex: firstTimeLoad.current ? 1 : 0
                }}
                data={data}
                ItemSeparatorComponent={MySeparatorComponent} // can be React Element or React Component
                keyExtractor={(item) => item.id}
                renderItem={({ item, separators, index }) => (
                    <RenderItem fruitName={item.fruitName} index={index} separators={separators} />
                )}
                ListEmptyComponent={EmptyComponent}
                ListFooterComponent={!firstTimeLoad.current && FooterComponent}
                ListFooterComponentStyle={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    height: 60,
                    backgroundColor: 'orange',
                }}
                ListHeaderComponent={!firstTimeLoad.current && HeaderComponent}
                ListHeaderComponentStyle={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    height: 60,
                    backgroundColor: 'orange'
                }}

                // numColumns={1}
                // columnWrapperStyle={{
                //     justifyContent: 'space-evenly',
                // }}

                // getItemLayout={(data, index) => {
                //     return {
                //         length: 100,
                //         offset: (100 + 10) * index,
                //         index 
                //     }
                // }}

                // initialNumToRender={initialNumToRender}

                refreshing={refresh}
                onRefresh={fakerAPI}

            />

            <TouchableOpacity onPress={scrollToEnd}>
                <Text>Move to Bottom</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                scrollToLastIndex()
            }}>
                <Text>Move to Last Index</Text>
            </TouchableOpacity>

        </View>
    )
}


export default MyFlatList;


// by-default highlighted and leadingItem props are provided
const MySeparatorComponent = ({ highlighted, leadingItem, style = {} }) => {

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
        height: 100,
        backgroundColor: 'skyblue',
        flexDirection: 'row',
    }}>
        <TouchableOpacity style={{
            backgroundColor: 'pink',
            flex: 1,
            justifyContent: 'center'
        }} onPressIn={() => {
            highlight()

            if (index > 1) {
                updateProps('trailing', {
                    style: {
                        height: 100,
                        borderWidth: 10
                    }
                })
            }
        }} onPressOut={() => {
            unhighlight()
            if (index > 1) {
                updateProps('trailing', {
                    style: {

                    }
                })
            }

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
            <ActivityIndicator animating={true} size={"small"} hidesWhenStopped={true} color={'red'} />
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

    When dealing with numColumns of FlatList if > 1 than more than 1 items share the same ItemSeparatorComponent

    "extraData" prop help to re-render the FlatList when anything else from data gets changed => if FlatList depends on any other state variable else then the data then we need to mention that in the extraData

    "intialNumToRender" -> using this prop we specify how many items we want to by-default render on the screen, these items always stays in the memory should be as many as that can be rendered on the screen

    FlatList always calculates the height (when horizontal={false}) or width( when horizontal={true} ) of items that are render using renderItem, but when specifying the "getItemLayout" prop it skips that calculation of the height or width, this does not inforces the items to follow that height or width, but itself skips that calculation and belives on the user specific value

    TouchableOpacity PressEvent -> onPressIn -> onPressout -> onPress 


    React Component means function that returns JSX Element
    React Element means JSX Element only
*/