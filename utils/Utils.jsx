import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const getResualeHeight = () => {
    const insets = useSafeAreaInsets();
    const screenHeight = Dimensions.get('window').height;


    return screenHeight - insets.top - insets.bottom
}

export {
    getResualeHeight
}