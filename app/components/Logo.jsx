import Link from "next/link";
import React from "react";
import { Book } from "lucide-react";

function Logo() {
  return (
    <Link class="block text-teal-600" href="/">
      <span class="sr-only">Home</span>
      <div className="flex gap-2">
        <Book /> <span>KePDF.com</span>
      </div>
    </Link>
  );
}

export default Logo;
