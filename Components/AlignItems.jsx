import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AlignItems = props => {
    const [alignItems, setAlignItems] = useState('stretch');

    return (
        <Parent 
            setContent={setAlignItems}
            justifyContext={alignItems}
            value={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
            label={'alignItems'}
        >
            <View style={[styles.item, {
                backgroundColor: 'orange'
            }]}>
                <Text>
                    orange
                </Text>
            </View>
            <View style={[styles.item, {
                backgroundColor: 'skyblue',
                marginLeft: 20
            }]}>
                <Text>
                    Skyblue
                </Text>
            </View>
            <View style={[styles.item, {
                backgroundColor: 'teal'
            }]}>
                <Text>
                    Teal
                </Text>
            </View>
        </Parent>
    )
}


const Parent = ({children, value, setContent, label, justifyContext}) => {
    
    return (
        <View style={styles.container}>
            <View style={[{
                flexDirection: 'row',
                columnGap: 20,
                flexWrap: 'wrap'
            }]}>
                {value.map(function(data) {
                    return <Button title={data} onPress={() => {
                        setContent(data)
                    }} />
                })}
            </View>

            <View style={[styles.container, {
                [label]: justifyContext,
            }]}>
                {children}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 50,
        // width: 50
    }
})

export default AlignItems;