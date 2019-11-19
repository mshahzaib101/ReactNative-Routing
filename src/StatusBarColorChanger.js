import React, { Component } from 'react';
import {StatusBar,ScrollView, Button, Text, TextInput, View } from 'react-native';


export default class StatusBarColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'black'};
  }

  render() {
    return (    <View>
           
      <ScrollView >
      <StatusBar backgroundColor={this.state.color} barStyle="light-content" />
      <Text style={{fontSize:30, textAlign:'center', color:'#000000'}}>Status Bar</Text>

    
       <Button onPress={()=>{this.setState({color: 'red'})}} color='red' title='red'></Button>
       <Button onPress={()=>{this.setState({color: 'black'})}} color='black' title='black'></Button> 
       <Button onPress={()=>{this.setState({color: 'green'})}} color='green' title='green'></Button>
      <Button onPress={()=>{this.setState({color: 'yellow'})}} color='yellow' title='yellow'></Button>
      <Button onPress={()=>{this.setState({color: 'blue'})}} color='blue' title='blue'></Button>
      <Button onPress={()=>{this.setState({color: 'orange'})}} color='orange' title='orange'></Button>
      <Button onPress={()=>{this.setState({color: 'pink'})}} color='pink' title='pink'></Button>
      <Button onPress={()=>{this.setState({color: 'white'})}} color='white' title='white'></Button>

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
            <Button
              onPress={() => this.props.navigation.navigate('About')}
              title="About"
            />
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('ColorChanger')}
            title="Status Bar Color Changer"
          />
      </ScrollView></View>
    );
  }
}