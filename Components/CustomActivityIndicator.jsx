import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { PlatformContext } from "../Context/Store";

const CustomIndicator = props => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const {platform} = useContext(PlatformContext);

    useEffect(function() {
        setTimeout(function() {
            setUser('Vaibhav Chawla');
            setLoading(false);
        }, 5 * 1000);
    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <ActivityIndicator />
            {
                loading ? <ActivityIndicator animating={loading} hidesWhenStopped={true} /> : null
            }

            <Text>
                {user ? user : 'Loading...'}
            </Text>
        </View>
    )
}


export default CustomIndicator;