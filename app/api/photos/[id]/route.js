import { singlePhoto } from "@/data/photos";
import { NextResponse } from "next/server";

export const GET = async (request,{ params: { id } }) => {
  const singleImage = await singlePhoto(id);
  return NextResponse.json(singleImage);
};
