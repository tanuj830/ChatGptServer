const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");

router.post("/", async (req, res) => {
  //   console.log();

  //CHAT GPT
  let APIcall = async () => {
    const newConfig = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(newConfig);

    const chatHistory = [];

    const user_input = req.body.prompt.text;
    const messageList = chatHistory.map(([input_text, completion_text]) => ({
      role: "user" === input_text ? "ChatGPT" : "user",
      content: input_text,
    }));
    messageList.push({ role: "user", content: user_input });

    try {
      const GPTOutput = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messageList,
      });

      const output_text = GPTOutput.data.choices[0].message.content;
      console.log(output_text);
      res.send(output_text);
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      } else {
        console.log(err.message);
      }
    }
  };
  APIcall();
});

module.exports = router;
