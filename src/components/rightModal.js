import React, { Component, useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import Stars from '../utils/yelpStars'
import YelpLogo from '../../assets/yelp_logo.png'


const RightModal = (props) => {

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(props.restCard.url);
  };
  const handlePhone = () => {
    Linking.openURL(`tel:${props.restCard.phone}`);
  };

  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={props.rightSwipe}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity onPress={handleOpenWithWebBrowser}>
            <Image source={YelpLogo} style={styles.yelplogo}/>
          </TouchableOpacity>
            <View style={styles.RectangleShapeView}>
              <Text style={styles.modalText}>{props.restCard.name}</Text>
              {props.restCard.price ? <Text style={styles.modalText}>{props.restCard.price}</Text> : <Text style={styles.modalText}>Unknown Pricing</Text>}
              
              <Stars rating={props.restCard.rating} />
              <Text style={styles.ratingText}>Based on {props.restCard.review_count} Reviews</Text>
            </View>
            <View style={styles.RectangleShapeView}>
              <Text style={styles.addressText}>{props.restCard.location.address1}</Text>
              <Text style={styles.addressText}>{props.restCard.location.city}, {props.restCard.location.state}</Text>
              <Text style={styles.addressText}>{props.restCard.location.zip_code}</Text>
              <Text style={styles.distanceText}>{(Math.floor(props.restCard.distance * 3.28084) / 5280).toFixed(2)} miles from your location</Text>
              <TouchableOpacity onPress={handlePhone}>
                <Text style={styles.phoneText}>{props.restCard.display_phone}</Text>
              </TouchableOpacity>
            </View>
              

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#ffde00' }}
              onPress={() => { props.swipeReset() }}
            >
              <Text style={styles.textStyle}>Keep Swiping!</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 500,
    margin: 20,
    backgroundColor: '#d92a20',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#ffde00',
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginTop: 20,
    paddingHorizontal: 58,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 0,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  RectangleShapeView: {
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    borderRadius: 50,
    backgroundColor: '#dedede',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    },
    phoneText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 15,
      color: '#d92a20',
      marginTop: 1,
    },
    ratingText: {
      marginBottom: 10,
      marginTop: 0,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
    },
    addressText: {
      marginBottom: 3,
      marginTop: 3,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
    },
    distanceText: {
      marginBottom: 1,
      marginTop: 3,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
    },
    yelplogo: {
      marginBottom: 10,
      marginLeft: 5,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
    }
});

export default RightModal;