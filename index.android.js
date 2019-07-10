//Import a library to help create a component
import React from 'react';
import {Text,AppRegistry} from 'rect-native';


//Create a component

const App = () => (
  <Text>Hello World</Text>
  );


 //Render it to the device
AppRegistry.registerComponent('albums', () =>App);
