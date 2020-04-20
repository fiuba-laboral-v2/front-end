export const FormikValidator = <Value>(
  {
    validator,
    mandatory = false
  }: {
    validator?: (value: Value) => void,
    mandatory?: boolean
  } = { }
) => {
  return (value: Value) => {
    if (mandatory && [ "", null, undefined, { } ].includes(value)) return "Este campo es obligatorio";

    try {
      if (validator) validator(value);
    } catch ({ message }) {
      return message;
    }
  };
};
