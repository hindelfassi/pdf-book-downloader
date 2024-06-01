import Link from "next/link";
import Button from "./Button";
import { ArrowDownToLine } from "lucide-react";
import Section from "./Section";
import BookCover from "./BookCover";
import ActionButton from "./ActionButton";

export default function BookPage({ book }) {
  const {
    _id,
    pages,
    format,
    language,
    isbn,
    datePublished,
    publisher,
    originalTitle,
    awards,
    title,
    subTitle,
    description,
    imageUrl,
    fileID,
    authors,
    genres,
    author,
    authorDiscription,
  } = book;

  const fullTitle = `${title}${subTitle ? ` : ${subTitle}` : ``}`;

  return (
    <div className="bg-white text-gray-900  text-justify">
      <div className="container max-w-screen-md mx-auto text-center pt-12 md:pt-24 lg:pt-32">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{`Download ${title} PDF by ${author}`}</h1>
        <p className="text-2xl text-gray-500">{`Free Download ${title} PDF by ${author} from ${publisher} published at ${datePublished}`}</p>
        <Link
          href={`https://english-ebooks.com/download/${fileID}`}
          className="mt-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
        >
          <ArrowDownToLine className="mx-2" />
          Free Download
        </Link>
      </div>
      <Section>
        <div className="h-fit md:sticky md:top-5 mx-auto">
          <BookCover imageUrl={imageUrl} alt={fullTitle} />
          <ActionButton fileID={fileID} />
        </div>
        <div className="space-y-4 md:col-span-2">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="text-lg text-gray-500 ">{subTitle}</p>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <p className="text-sm font-medium">
              By{" "}
              <Link href="#" className="hover:underline" prefetch={false}>
                {author}
              </Link>
            </p>
            <p className="text-sm text-gray-500 ">
              Published by{" "}
              <Link href="#" className="hover:underline" prefetch={false}>
                {publisher}
              </Link>{" "}
              on {datePublished}
            </p>
          </div>

          <div className="prose prose-gray max-w-3xl mx-auto ">
            <h2 className="text-2xl font-bold mb-4">Book Details</h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
              <li>Format: {format}</li>
              <li>Number of pages: {pages} pages</li>
              <li>Language: {language}</li>
              <li>ISBN: {isbn}</li>
              <li>Publisher: {publisher}</li>
              <li>Publication Date: {datePublished}</li>
            </ul>
            <div className="prose prose-gray max-w-3xl mx-auto">
              <h2 className="text-center text-2xl font-bold mb-4">
                About the Book
              </h2>
              <p className={`leading-7 ${`line-clamp-5`}`}>{description}</p>
            </div>
            <div className="prose prose-gray max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">
                About the Author
              </h2>
              <p className={`leading-7 ${`line-clamp-3`}`}>
                {authorDiscription}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
