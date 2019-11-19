import React, { Component } from 'react';
import { StatusBar, Button, Text, View } from 'react-native';

class AboutPage extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="yellow" barStyle="light-content" />
        <Text style={{ fontSize: 30, textAlign: 'center', color: '#000000' }}>
          About Page
        </Text>
        <View
            style={{
              flexDirection: 'row',
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
           <Text style={{fontSize:20, paddingTop:20}}>Reciving text from Home Page</Text>
           <Text style={{fontSize:20, color:'red'}}>{this.props.navigation.getParam('text', 'not recieved')}</Text>
      </View>
    );
  }
}

export default AboutPage;
