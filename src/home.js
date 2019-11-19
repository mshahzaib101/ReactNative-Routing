import React, { Component } from 'react';
import {
  StatusBar,
  ScrollView,
  TouchableNativeFeedback,
  Alert,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class HomePage extends Component {
  //built in function by react navigation
  //https://reactnavigation.org/docs/en/headers.html
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'blue',
    },
     headerTintColor: '#fff',
  };

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    console.log('home');
    //react navigation automatically passes the prop to component
    console.log(this.props.navigation);
    return (
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center', color: '#000000' }}>
          Home Page
        </Text>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
              backgroundColor: "darkblue"
            }}
          >
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              title="Home"
            />
            <Button
              onPress={() => this.props.navigation.navigate('Contact')}
              title="Contact"
            />
            {/* //Pasing text to about screen (WITHOUT REDUX) */}
            <Button
              onPress={() => this.props.navigation.navigate('About',{text:this.state.text})}
              title="About"
            />
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('ColorChanger')}
            title="Status Bar Color Changer"
          />
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
          <Text style={{fontSize:20, paddingTop:20}}>Passing text to about Page</Text>
           <TextInput
          style={{height: 40}}
          placeholder="Type here to send"
          onChangeText={(text) => this.setState({text})}
        />
        </ScrollView>
      </View>
    );
  }
}
