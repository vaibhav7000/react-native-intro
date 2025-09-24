/*

    React-native uses React Architecture to build the User interface i.e Components based Archiecture to define the interface

    React native approach to define the User-interfaces
    1. Components -> Code that Helps to define the user-interface
    2. JSX
    3. Props -> Arguments that are passed to the Components
    4. State -> Storage for the Component that Gets maintained when the component re-renders and gets upadted when we update that


    "View" is general container that allows to club other view but Non-Scrolling
    "ScrollView" is container that enable scrolling both horizontally and vertically

    Promise.all -> wait for all promises to get resolved and returns array of data if any fails => comes in the catch block with error only
    Promise.any -> waits for any promise to get resolved, and if all fails then it will return an aggegator error
    Promise.allSettled -> 
*/


const promiseOne = Promise.reject("Error 1");
const promiseTwo = Promise.reject("Error 2");

Promise.any([promiseOne, promiseTwo]).then(data => {
    console.log(data)
}).catch(e => {
    console.log(e);
});