import { userRegisterSchema } from "@/schemas/userSchema";
import { ValidationError } from "yup";
import { RegisterErrorData, RegisterFormData } from "@/types/RegisterForm";

const registerValidator = async (
  registerFormData: RegisterFormData,
  setRegisterErrors: React.Dispatch<React.SetStateAction<RegisterErrorData>>
) => {
  const handleErrorRegistration = (errorField: string, error: string) => {
    setRegisterErrors((prevData: RegisterErrorData) => ({
      ...prevData,
      [errorField]: error,
    }));
  };

  setRegisterErrors({
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    repeatPassword: null,
    dob: null,
  });

  try {
    await userRegisterSchema.validate(registerFormData, {
      abortEarly: false,
    });
  } catch (errors) {
    if (errors instanceof ValidationError) {
      errors.inner.forEach((error) => {
        if (
          (error.path && error.path === "firstName") ||
          error.path === "lastName"
        ) {
          handleErrorRegistration(error.path, error.message);
          throw new Error(error.message);
        }
        if (error.path) {
          handleErrorRegistration(error.path, error.message);
          throw new Error(error.message);
        }
      });
    }
  }
};
export default registerValidator;
