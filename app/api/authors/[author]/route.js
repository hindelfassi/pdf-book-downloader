import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/app/lib/mongodb";

export async function GET(request, context) {
  const { params } = context;
  const author = params.author;
  console.log(author.replace("-", " "));
  try {
    const db = await connectToDatabase();

    if (!author) {
      return NextResponse.json(
        { error: "Book author is required" },
        { status: 400 }
      );
    }

    const books = await db
      .collection("book_api_collection")
      .find({
        author: {
          $regex: new RegExp(author.replace("-", " ").toLowerCase(), "i"),
        },
      })
      .toArray();
    if (!books) {
      return NextResponse.json({ error: "Books not found" }, { status: 404 });
    }

    return NextResponse.json(books);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
