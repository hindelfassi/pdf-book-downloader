import Link from "next/link";

async function getBooks() {
  const res = await fetch(`${process.env.HOST}/api/books/`, {
    method: "GET",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getBooks();
  return (
    <main>
      {data.map((book) => (
        <Link
          className="py-1 block"
          key={book._id}
          href={`/books/${book.fileID}`}
        >
          {book.title}
        </Link>
      ))}
    </main>
  );
}
