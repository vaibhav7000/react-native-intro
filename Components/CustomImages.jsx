import React from "react";
import { Text, View, Button, Image, FlatList, ScrollView } from "react-native";



const CustomImage = props => {

    return (
        <View style={{
            flex: 1,
            gap: 10
        }}>
            <ScrollView horizontal={false} contentContainerStyle={{
                backgroundColor: 'skyblue'
            }} bounces={true}>

                {/* Static resources ( Images ) from the app bundle */}
                <Image source={require("../Images/Screen.png")} style={{
                    height: 100,
                    width: 200
                }} accessible={true} accessibilityLabel={'ScreenShot of the screen'} />

                {/* for network and data images we need to define the dimension of the image */}
                <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }} height={100} width={100} blurRadius={0} />

                <Image source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                }} height={100} width={100} />

                <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }} style={{
                    height: 200,
                    width: 200
                }} defaultSource={require('../Images/Screen.png')} />

                <Image source={[{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }, {
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                }]} width={200} height={200} />


                <Image defaultSource={require("../Images/Screen.png")} loadingIndicatorSource={require("../Images/Screen.png")} source={{
                    uri: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg',
                    scale: 1,
                    // headers and body might be used to get the data from the servers that are authenticated
                    headers: {},
                    method: 'GET',
                    cache: 'force-cache', // reload -> no caching will be done, everytime the request will be made to get the resources from the server, 'force-cache' -> caching will be done, if there is no cache found then request will be made to get the data, only-if-cache ->
                }} width={200} height={200} blurRadius={0}  />

            </ScrollView>


        </View>
    )
}

export default CustomImage

/*

    "Image" component is used to Display Images, these images can be from the network, or from the app bundle ( static resources ) or from the phone storage ( temporary images from camera and image stored inside the phone )

    For network and data images we need to specify height and width prop or provide them in styling

    Images from static Resources or local Storage to set there height and width use the style prop

    We can only access the images directly from the Network or from the Static Resources ( present inside the app bundle ), To get the Images from the phone Storage we need to access that from the phones API

    Props: 
    accessible
    accessibilityLabel
    alt
    blurRadius
    defaultSource accepts type as ImageSource ( number that is returned by the require("path define") )



    backend Problem:
    When sending the GET request to the server do not mention body because it violates the protocol

    By default FlatList, SectionList and ScrollView takes full height of the their parent View and then enables scrolling, do not specify their individual height or width then scrolling will not be enabled
*/