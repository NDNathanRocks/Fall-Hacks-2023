const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(express.json());

// My OpenAI API key
const apiKey = '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';

app.post('/generate-fitness-schedule', async (req, res) => {
  const { height, weight, fitnessLevel, workouts } = req.body;

  // Use OpenAI to generate the fitness schedule 
  const openAIResponse = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: `Generate a fitness schedule for a person with height ${height} cm, weight ${weight} kg, fitness level ${fitnessLevel} out of 10, and ${workouts} workouts per week.`,
      max_tokens: 1500, // Adjust based on the response length you want
    },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    }
  );

  const fitnessSchedule = 'HI!!!';//openAIResponse.data.choices[0].text;

  console.log(fitnessSchedule);

  res.json({ schedule: fitnessSchedule });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});