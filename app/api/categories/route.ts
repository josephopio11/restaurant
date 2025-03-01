import { NextResponse } from "next/server";

export const GET = () => {
  console.table({
    message: "You have hit the GET Endpoint",
    likes: 1000,
    dislikes: 20,
    wife: "Cynthia",
  });
  return new NextResponse("Get Endpoint", { status: 200 });
};

export const POST = () => {
  return new NextResponse("Post Endpoint", { status: 200 });
};
