import { chatCompletion } from "../bot-engine";

const api = [
  {
    endpoint: "completions/create",
    method: "POST",
    handler: async (req: any, res: any) => {
      let error;
      let data;

      if (req.body) {
        try {
          data = await chatCompletion(req.body);
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
