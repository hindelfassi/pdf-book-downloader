import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/app/lib/mongodb";

export async function GET(request, context) {
  const { params } = context;
  const id = params.bookId;

  try {
    const db = await connectToDatabase();

    if (!id) {
      return NextResponse.json(
        { error: "Book ID is required" },
        { status: 400 }
      );
    }

    const book = await db
      .collection("book_api_collection")
      .findOne({ fileID: id });
    if (!book) {
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    return NextResponse.json(book);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch book" },
      { status: 500 }
    );
  }
}
