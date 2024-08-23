import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Step 2: Define the system prompt
const systemPrompt = `
You are a rate my professor agent to help students find classes, that takes in user questions and answers them.
For every user question, the top 3 professors that match the user question are returned.
Use them to answer the question if needed.
`;

// Step 3: Create the POST function
export async function POST(req) {
  const data = await req.json();

  // Step 4: Initialize Pinecone and Google Gemini
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  const index = pc.index("rag").namespace("ns1");

  // Initialize Google Gemini
  const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  // Step 5: Create the prompt

  // Step 6: Generate the embeddings

  // geni model for vertex embeddings

  const embedModel = genai.getGenerativeModel({
    model: "text-embedding-004",
  });

  const text = data[data.length - 1].content;
  const embeddingsResult = await embedModel.embedContent(systemPrompt + text);

  const embedding = embeddingsResult.embedding.values;

  // Step 6: Query Pinecone
  const results = await index.query({
    topK: 4,
    includeMetadata: true,
    vector: embedding,
  });

  // Step 7: Format the results
  let resultString = "";
  results.matches.forEach((match) => {
    resultString += `
      Returned Results:
      Professor: ${match.id}
      Review: ${match.metadata.review}
      Subject: ${match.metadata.subject}
      Stars: ${match.metadata.stars}
      \n\n`;
  });

  // Step 8: Prepare the Google Gemini request
  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);

  // filter out the role property from lastDataWithoutLastMessage and rename the content property with text
  lastDataWithoutLastMessage.forEach((item) => {
    delete item.role;
    item.text = item.content;
    delete item.content;
  });

  // create a chat for generative model

  const chatModel = genai.getGenerativeModel({
    model: "gemini-pro",
  });

  // Step 9: Generate the completion

  const completion = await chatModel.generateContent({
    contents: [
      {
        parts: [
          {
            text: systemPrompt,
          },
          ...lastDataWithoutLastMessage,
          {
            text: lastMessageContent,
          },
          {
            text: text,
          },
        ],
      },
    ],
  });

  console.log(completion);

  // Step 10: Return the response

  return new Response(
    JSON.stringify({
      result: completion.response.candidates[0].content.parts[0].text,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return NextResponse.next();
}
