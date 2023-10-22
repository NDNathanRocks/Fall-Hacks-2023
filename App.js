import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

function App() {
  const [height, setHeight] = useState('0');
  const [weight, setWeight] = useState('0');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [workouts, setWorkouts] = useState('0');
  const [fitnessSchedule, setFitnessSchedule] = useState('');

  const handleSubmit = async () => {
    // Send user information to your server (backend) to communicate with OpenAI.
    const response = await axios.post('/generate-fitness-schedule', {
      height,
      weight,
      fitnessLevel,
      workouts,
    });

    setFitnessSchedule(response.data.schedule);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

export default App;