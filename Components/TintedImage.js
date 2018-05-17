import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Dimensions } from 'react-native';

export default class TintedImage extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      imgGray: '',
      imgOverlay: ''
    };

  }

  imagePickerGray = (image) => {

    var imgGray1 = require('../Icons/cham1-gray.png');
    var imgGray2 = require('../Icons/cham2-gray.png');
    var imgGray3 = require('../Icons/cham3-gray.png');

    switch(image){
      case 1:
          return imgGray1;
      case 2:
          return imgGray2;
      case 3:
          return imgGray3;
    }
  }
  imagePickerOverlay = (image) => {

    var imgOverlay1 = require('../Icons/cham1-overlay.png');
    var imgOverlay2 = require('../Icons/cham2-overlay.png');
    var imgOverlay3 = require('../Icons/cham3-overlay.png');

    switch(image){
      case 1:
          return imgOverlay1;
      case 2:
          return imgOverlay2;
      case 3:
          return imgOverlay3;
    }
  }
  render() {
    return (
      <View style={{width:this.props.size, height:this.props.size,borderRadius:this.props.size,backgroundColor: this.props.backgroundColor }}>
        <View style = {styles.backgroundContainer}>
          <Image
            source={this.imagePickerGray(this.props.version)}
            style={{width:this.props.size, height:this.props.size }}
          />
        </View>
        <View style = {styles.overlay}>
          <Image
            source={this.imagePickerOverlay(this.props.version)}
            tintColor= {this.props.color}
             style={{width:this.props.size, height:this.props.size}}
          />
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,


  },
  overlay: {
    opacity: 0.25,
    backgroundColor: '#00000000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  Image_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});
