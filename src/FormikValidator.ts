export const FormikValidator = (
  {
    validator,
    mandatory = false
  }: {
    validator?: (value: any) => void,
    mandatory?: boolean
  } = {}
) => {
  return (value: any) => {
    if (mandatory && ["", null, undefined, {}].includes(value)) return "Este campo es obligatorio";

    try {
      if (validator) validator(value);
    } catch ({ message }) {
      return message;
    }
  };
};
