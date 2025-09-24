import React, { useState } from "react";
import { Text, View, ScrollView, Button } from "react-native";
import Dog from "./Dog";
import CustomInput from "./TextInput";

const CustomScroll = props => {
    const [hungry, setHungry] = useState(true);
    return (
        <ScrollView horizontal={false} bounces={false}  maximumZoomScale={2} minimumZoomScale={1} style={{backgroundColor: "transparent"}} >
            <Dog name={'Bob'} hungry={hungry} />
        </ScrollView>
    )
}


export default CustomScroll;

/*
    
    By-default ScrollView takes full screen height and 

*/