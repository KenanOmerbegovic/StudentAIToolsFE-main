import { registerUser } from "@/apiHandlers/user";
import { RegisterErrorData, RegisterFormData } from "@/types/RegisterForm";
import registerValidator from "@/validators/registerValidator";
import { useState } from "react";

const useRegister = () => {
  // const { setButtonLoading } = useButtonLoadingStore();
  // const notify = () =>
  //   toast(
  //     `User account ${registerFormData.email} is registered successfully. Proceed to login!`
  //   );
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    dateOfBirth: "",
  });
  const [registerErrors, setRegisterErrors] = useState<RegisterErrorData>({
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    repeatPassword: null,
    dateOfBirth: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData: RegisterFormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      // setButtonLoading(buttonId, true);
      await registerValidator(registerFormData, setRegisterErrors);
      await registerUser(registerFormData);

      await setRegisterFormData({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: "",
        dateOfBirth: "",
      });
      // setButtonLoading(buttonId, false);

      // await notify();
    } catch (error) {
      console.log(error);
    }

    return;
  };

  return {
    registerFormData,
    registerErrors,
    handleInputChange,
    handleRegister,
    setRegisterErrors,
  };
};

export default useRegister;
