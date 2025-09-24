import React from "react";
import { Text } from "react-native";


// this is called JSX that returns react element that will be rendered on the screen, JSX is Javascript and hence we can use Javascript inside it.
const Cat = () => {
    const catName = "meow";
    // this is called the react element
    return <Text>Hello cat {catName}</Text>
}

export default Cat;