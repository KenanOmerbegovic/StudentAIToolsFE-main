import axios from "axios";

export const AddFile = async (e) => {
  const pdf = e.target.files[0];
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/readPdf`;
  try {
    const formData = new FormData();
    formData.append("pdf", pdf);
    formData.append("title", pdf.name);

    const res = await axios.post(url, formData);
    console.log(res);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
