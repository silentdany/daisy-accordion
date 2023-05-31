import * as SibApiV3Sdk from "@sendinblue/client";
import { NextApiRequest, NextApiResponse } from "next";

const apiInstance = new SibApiV3Sdk.ContactsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

let createContact = new SibApiV3Sdk.CreateContact();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  createContact.email = body.email;

  createContact.listIds = [2];
  apiInstance.createContact(createContact).then(
    (data) => res.status(200).json(data),
    (error) => res.status(400).json(error)
  );
};

export default handler;
