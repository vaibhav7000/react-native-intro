import React, { useState } from "react";
import { View, Button } from "react-native";


const CustomButton = props => {

    const [disableButton, setDisbaleButton] = useState(false);



    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <Button accessibilityLabel="Press Button" disabled={disableButton} title="Press Button" onPress={e => {
                // e -> touchEvent / GestureEvent
                console.log('ButtonPressed');
                console.log(e);
            }} testID="Press-Button" />

            <Button title="Disable Above button" onPress={() => {
                setDisbaleButton(!disableButton)
            }} />
        </View>
    )
}

/*

    Button Componenet supports Touch / Gesture (enables User Interaction)
    color -> this sets the textColor for iOS and background-color for android 

*/

export default CustomButton