// import React, {useState, useEffect} from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function FitnessForm({}) {
//   return(
//     <View style={{
//       alignItems: 'center',
//       marginTop: 100,
//       padding: 20
//     }}>
//       <Text>In FitnessForm Component</Text>
//     </View>
//   );
// }

// // FitnessForm.js
// import React, { useState } from 'react';
// import { Pressable, View, Text, TextInput, StyleSheet } from 'react-native';
// import axios from 'axios';

// export default function FitnessForm() {


//     const [height, setHeight] = useState(0);
//     const [weight, setWeight] = useState(0);
//     const [fitnessLevel, setFitnessLevel] = useState('');
//     const [workouts, setWorkouts] = useState(0);
//     const [fitnessSchedule, setFitnessSchedule] = useState('');
  
//     const [output, setOutput] = useState("")    
//     // const CHATGPT_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

//     const configuration = new Configuration({
//         apiKey: process.env.OPENAI_API_KEY,
//     });
//     const openai = new OpenAiApi(configuration)

//     const handleInput = async () => {
//         try {
//             const userInput = `Generate a fitness schedule for a person with height ${height} cm, weight ${weight} kg, fitness level ${fitnessLevel} out of 10, and ${workouts} workouts per week.`
//             const response = await openai.createCompletion({
//                 prompt: `You: ${userInput}\nAI:`,
//                 max_tokens: 100,
//                 stop: ["You:"],
//             });
//             setOutput(response.data.choices[0].text);
//             console.log(output)
//         } catch(error) {
//             console.log(error);
//         }
//     }

//     // const generateResponse = async (text) => {
//     //     const response = await axios.post(CHATGPT_API_URL, {
//     //         prompt: text,
//     //         max_tokens: 150,
//     //     }, {
//     //         headers: {
//     //         // 'Content-Type': 'application/json',
//     //         'Authorization': `Bearer ${apiKey}`,
//     //         },
//     //     });

//     //     const { choices } = response.data;
//     //     const { text: generatedText } = choices[0];

//     //     return generatedText.trim();
//     // };
    
//     //   const handleSubmit = async () => {{
//     //       // send the user message to ChatGPT API
//     //       axios.post(`${CHATGPT_API_URL}/predict`, { text: `Generate a fitness schedule for a person with height ${height} cm, weight ${weight} kg, fitness level ${fitnessLevel} out of 10, and ${workouts} workouts per week.` })
//     //         .then(response => {
//     //           const botMessage = {
//     //             text: response.data.text
//     //           };
//     //           console.log(botMessage)
//     //         })
//     //         .catch(error => {
//     //           console.log(error);
//     //         });
//     //     };
//     //   }

// //   const handleSubmit = async () => {
// //     // Send user information to your server (backend) to communicate with OpenAI.
// //     try {
// //       const response = await fetch('/generate-fitness-schedule', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ height, weight, fitnessLevel, workouts }),
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         setFitnessSchedule(data.schedule);
// //         console.log(data.schedule)
// //       } else {
// //         console.error('Failed to fetch data');
// //       }
// //     } catch (error) {
// //       console.error('Error while fetching data', error);
// //     }
// //   };
// FitnessForm.js
import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

export default function FitnessForm() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [fitnessLevel, setFitnessLevel] = useState('');
    const [workouts, setWorkouts] = useState(0);
    const [fitnessSchedule, setFitnessSchedule] = useState('');
    const [output, setOutput] = useState("");

    const handleInput = async () => {
        try {
            const userInput = `Generate a fitness schedule for a person with height ${height} cm, weight ${weight} kg, fitness level ${fitnessLevel} out of 10, and ${workouts} workouts per week.`;
            console.log(userInput);
            // const apiKey = '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';
            const apiKey = "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";

            const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
                // prompt: `You: ${userInput}\nAI:`,
                prompt: "say hi",
                max_tokens: 10000,
                temperature: 0,
                stop: ["You:"],
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                },
            });
            // setOutput(response.data.choices[0].text);
            // setOutput(response.choices[0].message.content)
            setOutput(response['choices'][0]['message']['content'])
            console.log(output);
        } catch (error) {
            console.log(error.response.data);
        }
    }
    

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Fitness App</Text>
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Fitness Level"
          value={fitnessLevel}
          onChangeText={(text) => setFitnessLevel(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Workouts per Week"
          value={workouts}
          onChangeText={(text) => setWorkouts(text)}
          keyboardType="numeric"
        />
        <Pressable onPress={handleInput} style={({pressed}) => [
            styles.itemBox, pressed && { opacity: 0.8 }
            ]}>
            <Text style = {[styles.itemText]}>Generate Fitness Schedule</Text>
        </Pressable>
        {fitnessSchedule && <Text style={styles.schedule}>Generated Fitness Schedule: {fitnessSchedule}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {flex: 1},
    itemBox: { margin: 30,
                padding: 12,
                backgroundColor: "#3A4E48",
                height: 40
            },
    itemText: { fontSize: 12, color: "white" },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: '80%',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        height: 40
    },
    schedule: {
        marginTop: 10,
    },
});

