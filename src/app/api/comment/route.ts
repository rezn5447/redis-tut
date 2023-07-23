import { NextRequest } from "next/server";
import { redis } from "@/app/lib/redis";
import { nanoid } from "nanoid";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { text, tags } = body;

    const commentId = nanoid();

    // add comment to list
    await redis.rpush("comments", commentId);

    return new Response("OK");
  } catch (err) {
    console.log(err);
  }
};
