import React from "react";
import Link from "next/link";

type NoteProps = {
  id: string;
  title: string;
  text: string;
};

const Note: React.FC<NoteProps> = ({ id, title, text }) => {
  return (
    <Link
      href={`/dashboard/notes/${id}`}
      className="aspect-square bg-[#F7F18E] hover:bg-[#d5cf7b] transition p-4 flex flex-col gap-4 w-full rounded-2xl box-border no-underline"
    >
      <div className="flex gap-2 justify-between items-center">
        <p className="text-extrabold text-xl text-[#82362D]">{title}</p>
        <Link
          href={`/dashboard/notes/edit/${id}`}
          className="min-w-10 min-h-10 flex items-center justify-center rounded-full bg-black hover:bg-black/80 cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.63478 15.5334L1.09668 17.0841L2.64735 11.546L12.7882 1.45439C12.9028 1.33717 13.0398 1.24403 13.1908 1.18045C13.3419 1.11686 13.5042 1.08411 13.6682 1.08411C13.8321 1.08411 13.9944 1.11686 14.1455 1.18045C14.2966 1.24403 14.4335 1.33717 14.5481 1.45439L16.7264 3.64501C16.8417 3.75942 16.9333 3.89555 16.9958 4.0455C17.0583 4.19548 17.0905 4.35634 17.0905 4.5188C17.0905 4.68127 17.0583 4.84213 16.9958 4.9921C16.9333 5.14207 16.8417 5.27819 16.7264 5.39259L6.63478 15.5334Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <p className="text-medium text-base text-[#82362D] text-wrap w-full line-clamp-2">
        {text}
      </p>
    </Link>
  );
};

export default Note;