import React, {useState, useEffect} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FitnessForm from './FitnessForm';

export default function AIChatPage({}) {

  const [flag, setFlag] = useState(false)

  const callFitnessForm = () => {
    if(flag) {
      setFlag(false)
    } else {
      setFlag(true)
    }
  };

  return(
    <View style={{
      alignItems: 'center',
      marginTop: 100,
      padding: 20
    }}>
      <Pressable onPress={callFitnessForm} style={({pressed}) => [
          styles.itemBox, pressed && { opacity: 0.8 }
        ]}>
          <Text style= {[styles.itemText]}>Fitness Form</Text>
      </Pressable>
      {flag && <FitnessForm></FitnessForm>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1},
  itemBox: { margin: 10,
              padding: 12,
              backgroundColor: "#3A4E48"},
  itemText: { fontSize: 12, color: "white" }
})