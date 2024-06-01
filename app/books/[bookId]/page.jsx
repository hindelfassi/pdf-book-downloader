import BookPage from "@/app/components/BookPage";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
async function getBookById(bookId) {
  const res = await fetch(`${process.env.HOST}/api/books/${bookId}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const book = await getBookById(params.id);
  return {
    title: book[0].title,
    description: book[0].description,
  };
}

export default async function BookDetails({ params }) {
  const { bookId } = params;
  const book = await getBookById(bookId);

  return (
    <>
      <BookPage book={book} />
    </>
  );
}
