import { NextResponse } from "next/server";
import connectToDatabase from "@/app/lib/mongodb";
export async function GET() {
  try {
    const db = await connectToDatabase();
    const books = await db
      .collection("book_api_collection")
      .find({})
      .limit(20)
      .toArray();
    return NextResponse.json(books);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Not connected!" }, { status: 500 });
  }
}
