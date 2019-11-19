import React, { Component } from 'react';
import { StatusBar, Button, Text, View } from 'react-native';

class ContactPage extends Component {
  // for showing back title
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'go Home'),
    };
  };
  
  render() {
    return (
      <View>
        <StatusBar backgroundColor="yellow" barStyle="light-content" />
        <Text style={{ fontSize: 30, textAlign: 'center', color: '#000000' }}>
          Contact Page
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
      </View>
    );
  }
}

export default ContactPage;
