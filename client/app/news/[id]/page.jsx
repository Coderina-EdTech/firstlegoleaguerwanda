import React from "react";
import Image from "next/image";

import Link from "next/link";
import { AllBlogPosts } from "@/app/api/categories";

const page = ({ params }) => {
  const { id } = params;

  const book = AllBlogPosts.find(
    (post) => post.id.toString() === id.toString()
  );

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="p-2 md:px-8 lg:px-16">
      <div className="p-6">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <h1 className="ml-24 font-medium pt-4">- {book.date}</h1>
        <Image
          src={book.blogImg}
          alt={book.title}
          className="w-full md:w-80 lg:w-96 md:h-80 rounded my-4"
        />
        {/* <div>
      <h4 className="font-semibold">Abstract</h4>
      <p className="text-gray-600 mb-4">{book.abstract}</p>
    </div> */}
        {/* <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
    <ul className="space-y-4">
      {book.chapters.map((chapter) => (
        <li
          key={chapter.chapterId}
          className="bg-gray-100 p-4 rounded shadow"
        >
          <Link href={`/books/${id}/chapters/${chapter.chapterId}`}>
            <div className="text-blue-500 hover:underline">
              <h3 className="text-lg font-semibold">
                {chapter.chapterTitle}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul> */}
      </div>
    </div>
  );
};

export default page;
