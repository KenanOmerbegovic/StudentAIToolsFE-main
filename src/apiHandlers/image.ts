import axios from "axios";

export const uploadUserImage = async (token, image, setUploadErrors) => {
  if (setUploadErrors) setUploadErrors(null);
  const { userId } = token;

  const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/image/upload`;
  try {
    const formData = new FormData();
    formData.append("image", image, image.name);

    await axios.post(uri, formData, {
      params: {
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    if (error.code === "ERR_BAD_RESPONSE") {
      setUploadErrors(
        "Error trying to upload the image, please try uploading another format, image or name."
      );
    }
    throw error;
  }
};
