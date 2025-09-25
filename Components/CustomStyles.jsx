import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

const CustomStyles = () => {

    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end"
        }}>
            <View style={{
                flex: 1,
                backgroundColor: "orange"
            }}>
                <Text>
                    first
                </Text>
            </View>

            <View style={{
                flex: 2,
                backgroundColor: "pink"
            }}>
<Text>
                    first
                </Text>
            </View>

            <View style={{
                flex: 3,
                backgroundColor: "skyblue"
            }}>
                <Text>
                    first
                </Text>

            </View>
        </View>
    )
}

export default CustomStyles;

/*

    By-default each CORE COMPONENT IN react-native follows display: flex ( means they follow flex algorithm with direction = column and alignContent as flex-start and flexShrink as 1, flex value as 0 )

    Since all the Core Components follows flex-algorithm => using flex we can provide the space to them

    flex -> used to provide the component take the full avaiable space along the main-axis ( and is responsive means based on the screen size the height and width of the component changes )

    by default -> all the components have flex: 0 that means it will not take the full avaibale space but will grow as the content inside it changes

    larger the flex value more the space component will take

    by-default "SafeAreaProvider" will take all the space of the screen and 
    rest of the Core Components will take space according to the content present inside it

    To make the Components takes all the aviable space use flex, but the Parent should also have flex value 

    We can also use height and width with percentages to provide



*/