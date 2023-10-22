import React, {useState, useEffect} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// import registerNNPushToken from 'native-notify'

import { Link } from 'react-router-dom';
import FitnessForm from './FitnessForm';

export default function HomePage({}) {

  return(
      <View style={{
        alignItems: 'center',
        marginTop: 100,
        padding: 20
      }}>
        <Text>Home Page Component</Text>
        {/* <Pressable onPress={callFitnessForm} style={({pressed}) => [
          styles.itemBox, pressed && { opacity: 0.8 }
        ]}>
          <Text style= {[styles.itemText]}>PRESS ME!</Text>
        </Pressable>
        {flag && <FitnessForm></FitnessForm>} */}
      </View>
  );
}
