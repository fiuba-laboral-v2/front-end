export const FormikValidator = (validator: (value: any) => void) => {
  return (value: any) => {
    try {
      validator(value);
    } catch ({ message }) {
      return message;
    }
  };
};
