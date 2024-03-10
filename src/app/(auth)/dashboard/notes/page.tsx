"use client";

import { useEffect, useState } from "react";
import { fetchAllNotes } from "@/apiHandlers/notes";
import Note from "./components/Note";
import Link from "next/link";

export default function Page() {
  const [notes, setNotes] = useState();

  console.log(notes);

  useEffect(() => {
    fetchAllNotes(setNotes);
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-white">Notes</h1>
        <Link
          href={`/dashboard/notes/add`}
          className="primary button no-underline w-fit"
        >
          + Add New Note
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {notes ? (
          notes.map((note, index) => (
            <Note
              id={note._id}
              title={note.title}
              text={note.text}
              key={index}
            />
          ))
        ) : (
          <p className="text-text">No notes available</p>
        )}
      </div>
    </div>
  );
}
