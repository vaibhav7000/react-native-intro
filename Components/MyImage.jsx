import React, { useState } from "react";
import { View, ScrollView, Image, Text, Button } from "react-native";


const MyImage = props => {

    const [height, setheight] = useState(200);
    const [width, setWidth] = useState(200);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'skyblue'
        }}>
            <ScrollView horizontal={false} contentContainerStyle={{
                backgroundColor: 'red',
            }}>
                <Image blurRadius={0}  accessible={true} accessibilityLabel="My React Native Image" alt="The Alt prop By default Makes the Image component as Accessible Element and provides this string to the screen reader" source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} height={200} width={200} loadingIndicatorSource={require("../Images/Screen.png")} defaultSource={require("../Images/Screen.png")} />

                <Image source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                }} style={{
                    height: 200,
                    width: 200,
                    resizeMode: 'cover'
                }} />

                <Image source={require('../Images/Screen.png')} style={{
                    height: 200,
                    width: 200
                }} />

                <Image source={{
                    uri: '',
                    method: 'POST',
                    headers: {

                    },
                    body: JSON.stringify({

                    }),
                    height: 100,
                    width: 100,
                }} onError={({error}) => {

                }} />

                {/* <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',

                }} height={height} width={width} onLayout={({nativeEvent}) => {
                    console.log("WIll be Called when component mounts or when layout changes")
                }} onLoad={({nativeEvent}) => {
                    // this height and width is of the image that is get from the server
                    setheight(nativeEvent.source.height)
                    setWidth(nativeEvent.source.width);
                }} /> */}


                {/* <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }} onLoadStart={() => {
                    console.log("onLoadStart")
                }} onLayout={({nativeEvent}) => {
                    console.log(nativeEvent)
                    console.log("onLayout")
                }} onLoad={({nativeEvent}) => {
                    console.log('onLoad')
                }} onLoadEnd={() => {
                    console.log("onLoadEnd")
                }} onError={({error}) => {

                }} height={200}  /> */}


                <Image source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                    cache: 'default',
                    headers: {

                    },
                    method: 'GET',
                    height: 200,
                    width: 200
                }} onLayout={({nativeEvent}) => {
                    console.log(`onLayout callback is called with x as ${nativeEvent.layout.x}, y as ${nativeEvent.layout.y}, height as ${nativeEvent.layout.height} and with as ${nativeEvent.layout.width}`);
                }} onLoadStart={() => {
                    console.log("loading of the Component is started")
                }} onLoad={({nativeEvent}) => {
                    const { source } = nativeEvent
                    console.log(`onLoad is done, the Image is fetched from the server, with height as ${source.height}, width as ${source.width} and uri resource as ${source.uri}`)
                }} onLoadEnd={() => {
                    console.log("Image is successfully fetched fromt the server")
                }} />


                <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} onProgress={({nativeEvent}) => {
                    const { loaded, total } = nativeEvent;
                    const progress = ( loaded / total ) * 100;
                    console.log(progress);
                }} />
                
            </ScrollView>
        </View>
    )
}


export default MyImage;

/*

    Image Component is use to add Images in the mobile Application. We can add network Images or Static Resources ( from the App Bundle ) or from the Phone Storage ( For this We need to get the Access from the Phone Storage )

    For displaying the Images that are fetched from the Network or data we need to provide the width and height

    For Static Images or Local Images providing Height and Width is not Necessay

    loadingIndicatorSource
    defaultSource
    onLayout -> INVOKES on mount of the Component, but the Images takes Time to load and layout changes
    onLoad -> INVOKES when the Image sucessfully Loads and then the onLoadEnd callback runs, 

    onLoad callback recieves an object with property called nativeEvent: ImageLoadEvent that contains an source that contains height, width and uri of the fetched Image from the Internet

    onLayout callback recieves an object with property called nativeEvent: LayoutEvent that contains layout -> with height, width, x and y and target

    Series of the callback calling for network Images
    onLayout ---> onLoadStart ----> onLoad ---> onLoadEnd

    Series of Callback Calling for data Images
    onLayout ----> onLoad ----> onLoadEnd ----> onLoadStart, the order changes because it is not fetched from the server, rather some processing is done on the Local Side

*/


/*
    

*/