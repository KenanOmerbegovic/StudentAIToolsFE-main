"use client";

import { fetchNoteById } from "@/apiHandlers/notes";
import { useEffect, useState } from "react";
import Link from "next/link";
import GoBack from "@/components/shared/GoBack";

export default function Page({ params }: { params: { noteId: string } }) {
  const [note, setNote] = useState();
  useEffect(() => {
    fetchNoteById(params.noteId, setNote);
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <GoBack />
      <h1 className="text-2xl text-white">{note?.title}</h1>
      <p className="text-text">{note?.text}</p>
    </div>
  );
}
