export const FormikValidator = (
  validator: (value: any) => void,
  { mandatory = false }: { mandatory?: boolean } = {}
) => {
  return (value: any) => {
    if (mandatory && ["", null, undefined].includes(value)) return "Este campo es obligatorio";

    try {
      validator(value);
    } catch ({ message }) {
      return message;
    }
  };
};
