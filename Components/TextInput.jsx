import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";

const CustomInput = props => {
    const [words, setWords] = useState('');
    return (
        <View>
            <TextInput style={{
                borderWidth:1,
                borderColor: 'black',
            }} onChangeText={text => setWords(text)} placeholder="Enter words to Translate" value={words} />

            <Text>
                {words.split(' ').map(d => d && '❤️').join(' ').trim()}
            </Text>
        </View>
    )
}


export default CustomInput;