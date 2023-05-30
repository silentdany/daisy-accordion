// if (!process.env.BREVO_API_KEY) {
//   throw new Error("Missing env var from OpenAI");
// }

const handler = async (contact: object) => {
  try {
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key":
          "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",
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(contact),
    }).then((res) => {
      return res;
    });
  } catch (err) {
    console.error(err);
  }
};

export default handler;
