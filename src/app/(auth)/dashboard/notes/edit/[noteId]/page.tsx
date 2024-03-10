"use client";

import { editNote, fetchNoteById } from "@/apiHandlers/notes";
import GoBack from "@/components/shared/GoBack";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { noteId: string } }) {
  const [note, setNote] = useState({
    noteId: params.noteId,
    title: "",
    text: "",
  });
  useEffect(() => {
    fetchNoteById(params.noteId, setNote);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">
      <GoBack />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 w-full max-w-[400px]">
          <label className="label" htmlFor="title">
            Note Title
          </label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
            }}
            className="input"
            id="title"
            name="title"
            type="text"
            value={note.title}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 max-w-[400px]">
        <label className="label" htmlFor="text">
          Note Text
        </label>
        <textarea
          className="input min-h-[300px]"
          id="text"
          name="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
          value={note.text}
          type="text"
        />
      </div>

      <button
        className="primary button w-fit"
        onClick={() => editNote(note, router)}
      >
        Save changes to note
      </button>
    </div>
  );
}
