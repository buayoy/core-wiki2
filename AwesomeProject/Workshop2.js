/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Workshop2 extends Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>Palm to React Native!</Text>
  //       <Text style={styles.instructions}>To get started, edit App.js</Text>
  //       <Text style={styles.instructions}>{instructions}</Text>
  //     </View>
  //   );
  // }
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
      }}>
<BlinkText message="Test Palm" interval={10}/>
      </View>
    );
  }
}

class BlinkText extends Component {
  constructor (props){
    super(props)
    this.state = {isVisible: true};
    setInterval(()=>{
      this.setState(oldState=>{
        return {isVisible: !oldState.isVisible}
      })

    }, this.props.interval)

  }
  render() {
    let display =this.state.isVisible ? this.props.message:'';
    return (
     
      <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>
        {display}
    </Text>
    );
  }
}


