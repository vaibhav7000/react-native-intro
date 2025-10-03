// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useEffect, useState } from "react";
// import { View, Text, Button } from "react-native";


// import { createContext, useContext } from "react";

// const UserView = () => {
//     const [user, setUser] = useState('John');

//     useEffect(function() {
//         AsyncStorage.setItem(user, 'Doe')
//         .then(() => AsyncStorage.getItem(user))
//         .then(data => setUser(data));

//     }, []);

//     return (
//         <View>
//             <Text>
//                 {user}
//             </Text>
//         </View>
//     )
// }

// export default UserView;


// const MyContext = createContext();

// const MyProvider = () => {
//     const [value, setValue] = useState('Intial');

//     return (
//         <MyContext.Provider value={{
//             value, setValue
//         }}>
//             <Child />
//         </MyContext.Provider>
//     )
// }

// const Child = () => {
//     const {value, setValue} = useContext(MyContext);

//     return (
//         <View>
//             <Text>{value}</Text>

//             <Button title="Press Me" onPress={() => {
//                 setValue('Updated')
//             }} />
//         </View>
//     )
// }

// export {
//     MyProvider
// }



// import React, { useEffect, useReducer } from "react";
// import { View, Text, Button } from "react-native";


// const intialState = {
//     items: ['apple', 'banana']
// }

// const cartReducer = (currentState, action) => {
//     const type = action.type;
//     const payload = action.payload;

//     switch(type) {
//         case 'add':
//             return {
//                 items: [...currentState.items, payload]
//             }
//         case 'remove':
//             return {
//                 items: currentState.items.filter(data => data !== payload)
//             }
//     }
// }


// const ShoppingCart = () => {
//     const [state, dispatch] = useReducer(cartReducer, intialState);

//     useEffect(() => {
//         dispatch({
//             type: 'add',
//             payload: 'orange'
//         })
//     })

//     return (
//         <View>
//             {state.items.map((d, index) => <View key={index}>
//                 <Text>{d}</Text>
//             </View>)}
//         </View>
//     )
// }

// export default ShoppingCart;


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation, NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


const Home = () => {

    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
    )
}

const Profile = () => {

    return (
        <View>
            <Text>
                Profile
            </Text>
        </View>
    )
}

const Me = () => {

    return (
        <View>
            <Text>
                Me
            </Text>
        </View>
    )
}


const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Profile" component={Home} />
                <Stack.Screen name="Home" component={Profile} />
                <Stack.Screen name="Me" component={Me} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;


// import React, { useEffect, useState } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// const DataView = () => {

//     const [state, setState] = useState('Random');

//     useEffect(() => {
//         setTimeout(() => {
//             setState('User');
//         }, 2000)
//     }, []);


//     return (
//         <View>
//             <Text>
//                 {state}
//             </Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

// })

// export default DataView;

