import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";


const CustomFlexWrap = props => {
    const [flexWrap, setWrap] = useState('nowrap');

    return (
        <Parent wrap={flexWrap} setWrap={setWrap} label={'flexWrap'} values={['wrap', 'wrap-reverse', 'nowrap']} >
            <View style={[{
                width: 150,
            }, { backgroundColor: 'pink' }]} />

            <View style={[{
                width: 200,
            }, { backgroundColor: 'orange' }]} />

            <View style={[{
                // flex: 1
                // flexGrow: 1,
                height: 20,
                width: 20,
                flex: 1
            }, { backgroundColor: 'steelblue' }]} />
        </Parent>
    )
}

const Parent = ({ wrap, setWrap, label, values, children }) => {

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                columnGap: 20,
            }}>
                {values.map(function (data) {
                    return <TouchableOpacity style={{
                        backgroundColor: data === wrap ? 'pink': 'transparent',
                    }} onPress={() => {
                        setWrap(data)
                    }}>
                        <Text>{data}</Text>
                    </TouchableOpacity>
                })}
            </View>

            <View style={{
                flexWrap: wrap,
                flexDirection: 'row',
                backgroundColor: 'blue',
                flex: 1,
                columnGap: 10
            }}>
                {children}
            </View>
        </View>
    )
}


export default CustomFlexWrap;

/*

    flexGrow and flexShrink both values have values = 0 and hence it means Component does not grow and shrink intially and takes the space according to the content


    flex is shorthand property to provide flexGrow, flexShrink and flexBasis
*/