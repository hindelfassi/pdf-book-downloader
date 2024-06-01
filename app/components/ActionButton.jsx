import React from "react";
import Link from "next/link";
import { ArrowDownToLine, Eye } from "lucide-react";

function ActionButton({ fileID }) {
  return (
    <div className="flex flex-col gap-4 items-center mt-5 ">
      <Link
        href={`https://english-ebooks.com/download/${fileID}`}
        className="mt-3 w-full inline-flex items-center justify-center px-3 py-2 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
      >
        <ArrowDownToLine className="mx-2" />
        Free Download
      </Link>
      <Link
        href={`https://english-ebooks.com/read/${fileID}`}
        className="w-full inline-flex items-center justify-center px-3 py-2 text-base font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300"
      >
        <Eye className="mx-2" />
        Read Online
      </Link>
    </div>
  );
}

export default ActionButton;
