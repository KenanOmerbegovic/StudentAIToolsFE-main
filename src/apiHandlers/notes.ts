import axios from "axios";
import { useRouter } from "next/navigation";

export const fetchAllNotes = async (setNotes) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/notes`;
    const response = await axios.get(uri);
    const data = response.data;
    console.log(data);
    setNotes(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchNoteById = async (noteId, setNote) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/notes/${noteId}`;
    const response = await axios.get(uri);
    const data = response.data;
    console.log(data);
    setNote(data);
  } catch (error) {
    console.log(error);
  }
};

export const editNote = async (note, router) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/notes`;
    const response = await axios.put(`${uri}/${note._id}`, note);
    const data = response.data;
    console.log(data);
    router.push("/dashboard/notes");
  } catch (error) {
    console.log(error);
  }
};

export const addNewNote = async (note, router) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/note`;
    const response = await axios.post(`${uri}`, note);
    const data = response.data;
    console.log(data);
    router.push("/dashboard/notes");
  } catch (error) {
    console.log(error);
  }
};
