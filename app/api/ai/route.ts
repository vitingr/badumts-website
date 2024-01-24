// import type { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import Configuration from "openai";
// import OpenAIApi from "openai";
// import {OpenAIStream, StreamingTextResponse} from 'ai'

// type ResponseData = {
//   text: string | any;
// };

// interface GenerateNextApiRequest extends NextApiRequest {
//   body: {
//     prompt: string;
//   };
// }

// const config: any = new Configuration({
//   // organization: "org-e3nJwnO7Umr31tRxCzAyacAv",
//   apiKey:
//     process.env.OPENAI_API_SECRET ||
//     "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",
// });

// const openai = new OpenAIApi(config)

// export async function POST(
//   req: GenerateNextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const prompt = req.body.prompt;

//   console.log(req.body)

//   // if (!prompt) {
//   //   return new NextResponse("Please send your prompt", { status: 400 });
//   // }

//   const aiResult = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Say this is a test" }],
//     stream: true,
//   });

//   console.log(aiResult)

//   const response = OpenAIStream(aiResult)
//   const result = new StreamingTextResponse(response)

//   return new Response(JSON.stringify(result), {status: 200})

//   // let response = "";

//   // for await (const chunk of aiResult) {
//   //   if (chunk.choices && chunk.choices.length > 0) {
//   //     response += chunk.choices[0]?.delta?.content || "";
//   //   }
//   // }

//   // return new NextResponse(JSON.stringify(response), { status: 200 });
// }

import { NextApiRequest, NextApiResponse } from "next";
import Configuration from "openai";
import OpenAIApi from "openai";

type ResponseData = {
  text: string | any;
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

export async function POST(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;

  console.log(req.body)

  if (!prompt) {
    return new Response("Please send your prompt", { status: 400 });
  }

  const config: any = new Configuration({
    apiKey: "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"
  })
  
  const openai = new OpenAIApi(config)
  
  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 150,
    temperature: 1,
  })

  

}