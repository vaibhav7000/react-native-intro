import React, { useMemo } from "react";
import { View, Platform, Text, Button, TextInput, SectionList, StyleSheet } from "react-native";


const PlatformComponent = Platform.select({
    'ios': () => {
        return () => <Text style={{

        }}>IOS</Text>
    },
    'android': () => {
        return () => <Text>Android</Text>
    },
    'web': () => {
        return () => <Text>Web</Text>
    }
})();

const CustomPlatform = props => {

    const data = [{
        title: 'Fruits',
        data: ['Apple', 'Apple', 'Apple'],
    }, {
        title: 'Vegetables',
        data: ['Carot', 'Carot', 'Carot']
    }]

    const platform = useMemo(function() {
        const platform = Platform.OS; // ios, android, web, macos, window
        // Platform.select -> the properties are ios, android, native (both covers ios and android), web, macos, windows and default
    })

    return (
        <View style={styles.container} >
                <SectionList 
                sections={data}

                renderItem={({item}) => {
                    return <Text>{item}</Text>
                }}
                renderSectionHeader={({section}) => {
                    return <Text style={styles.header}>{section.title}</Text>
                }}
            />
            <PlatformComponent/>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        color: "gray",
        fontSize: 30,
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            native: {
                backgroundColor: 'yellow'
            },
            'default': {
                backgroundColor: "pink"
            },
        })
    }, 
    text: {

    }
});


export default CustomPlatform;





/*
    Platform.select can be used to style the elements based on the Platform and can also proide the componnets / React Components based on the platform.
*/