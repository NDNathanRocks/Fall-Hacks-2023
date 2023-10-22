import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

function FitnessForm() {
  const [height, setHeight] = useState('126'); //DEFAULT
  const [weight, setWeight] = useState('80');
  const [fitnessLevel, setFitnessLevel] = useState('5');
  const [workouts, setWorkouts] = useState('5');
  const [fitnessSchedule, setFitnessSchedule] = useState('');

  const handleSubmit = async () => {
    // Send user information to your server (backend) to communicate with OpenAI.
    try {
        console.log('hi');
      const response = await fetch('http://localhost:5000/generate-fitness-schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ height, weight, fitnessLevel, workouts }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setFitnessSchedule(data.schedule);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error while fetching data', error);
    }
  };
  

  return (
    <View>
      <Text>Fitness App</Text>
      <TextInput
        placeholder="Height (cm)"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TextInput
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        placeholder="Fitness Level"
        value={fitnessLevel}
        onChangeText={(text) => setFitnessLevel(text)}
      />
      <TextInput
        placeholder="Number of Workouts per Week"
        value={workouts}
        onChangeText={(text) => setWorkouts(text)}
      />
      <Button title="Generate Fitness Schedule" onPress={handleSubmit} />
      {fitnessSchedule !== '' && <Text>Generated Fitness Schedule: {fitnessSchedule}</Text>}
    </View>
  );
}

export default FitnessForm;
