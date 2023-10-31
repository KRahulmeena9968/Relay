import Replicate from 'replicate';


import { auth } from "@clerk/nextjs";
import { error } from "console";
import { NextResponse } from "next/server";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!
});


export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;

        if (!userId) {
            return new NextResponse("Unauthorised", { status: 401 });
        }

        if (!prompt) {
            return new NextResponse("Message is required", { status: 400 });
        }

        const response = await replicate.run(
            "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
            {
              input: {
                prompt: prompt
              }
            }
          );

        //   console.log(response.choices[0].message);
        return NextResponse.json(response);

    } catch (errro) {
        console.log("[VIDEO_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 })
    }
}