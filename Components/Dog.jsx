import { useState } from "react";
import { Text, Button, View } from "react-native";

// This is Component that will return React Element that will be rendered on the screen
const Dog = props => {
    const [isHungry, setIsHungry] = useState(props.hungry);
    return (
        <View>
            <Text>
                {props.name} is {isHungry ? 'hungry' : 'not hungry'}
            </Text>

            <Button onPress={() => {
                setIsHungry(!isHungry);
            }} disabled={!isHungry} title={`Click to feed the ${props.name}`} />
        </View>
    )
}


export default Dog;