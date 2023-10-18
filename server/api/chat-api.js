import { apiKey } from "../config.js";
import { chatCompletion } from "../bot-engine.js";

const api = [
  {
    endpoint: "prompt",
    method: "POST",
    handler: async (req, res) => {
      const { prompt } = req.body;
      let error;
      let data;

      if (prompt) {
        try {
          data = await chatCompletion({ prompt });
        } catch (e) {
          console.log(e);
          error = e;
        }
      } else {
        error = new Error("No text provided");
      }

      if (error) {
        res.status(500).send(error);
      } else {
        res.send(data);
      }
    },
  },
];

export default api;
