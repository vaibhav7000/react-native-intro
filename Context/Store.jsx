import React, { createContext } from "react";
import { Platform, View } from "react-native";

const PlatformContext = createContext();

const PlatformProvider = ({children}) => {

    return (
        <PlatformContext value={{
            platform: Platform.OS
        }}>
            <View style={{
                flex: 1
            }}>
                {children}
            </View>
        </PlatformContext>
    )
}

export {
    PlatformProvider,
    PlatformContext
}