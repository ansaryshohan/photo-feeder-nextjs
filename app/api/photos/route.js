import { allPhotos } from "@/data/photos";
import { NextResponse } from "next/server";

export const GET=async()=>{
   const photos= await allPhotos();
   return NextResponse.json(photos);
}