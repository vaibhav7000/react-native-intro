import React from "react";
import { View, Text, Button, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";


const UserInteractions = props => {

    const onPress = () => {
        // This will be called when the user presses and leaves the button
        console.log('Press');
    }

    const onLongPress = () => {
        // This gets called when the User press down the Button for long time and will also work even without leaving
        console.log('Long Press');
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'skyblue',
            gap: 20
        }}>
            <Button color={'yellow'} title="Button" onPress={onPress}/>

            <TouchableHighlight onPress={onPress} onLongPress={onLongPress}>
                <Text>
                    TouchableHightlight
                </Text>
            </TouchableHighlight>

            <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
                <Text>
                    TouchableOpacity
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default UserInteractions;


/*

    Touch / Gestures are same things in react-native, they refers to user interactions with the Application
    Different types of Gestures / touches are there -> 1.Press 2. scroll 3. LongPress 4. Drag 5. Swipe

    React-native provides Different components that supports the touches / Gestures, 
    "Button" supports this but comes with Pre-defined styling and hence we have to go to other Touchable Components

    These Components are use to capture Press Gesture
    TouchableHightlight
    TouchableOpacity
    TouchableWithoutFeedback
*/


