import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const FlexDirection = props => {

    const [flexDirection, setDirection] = useState('column');

    return (
        <PreviewLayout
            values={['row', 'column', 'row-reverse', 'column-reverse']}
            label={'flexDirection'}
            selectedValue={flexDirection}
            setFlexDirection={setDirection}
        >

            <View style={[{
                width: 50,
                height: 50,
            }, { backgroundColor: 'powderblue' }]} />
            <View style={[{
                width: 50,
                height: 50,
            }, { backgroundColor: 'orange' }]} />
            <View style={[{
                width: 50,
                height: 50,
            }, { backgroundColor: 'steelblue' }]} />
        </PreviewLayout>
    )

}


const PreviewLayout = ({ children, values, label, selectedValue, setFlexDirection }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "skyblue",
            gap: 20
        }}>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                columnGap: 100

            }}>
                {values.map(data => <Button title={data} onPress={() => setFlexDirection(data)} />)}
            </View>

            <View style={{
                flex: 1,
                direction: 'rtl',
                [label]: selectedValue,
                gap: 10,
            }}>
                {children}
            </View>
        </View>
    )
}


export default FlexDirection;