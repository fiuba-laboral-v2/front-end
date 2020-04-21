export const FormikValidator = <Value>(
  {
    validator,
    mandatory = false
  }: {
    validator?: (value: Value) => void,
    mandatory?: boolean
  } = {}
) => {
  return (value: Value) => {
    if (["", null, undefined, {}].includes(value)) {
      if (mandatory) return "Este campo es obligatorio";
      return;
    }

    try {
      if (validator) validator(value);
    } catch ({ message }) {
      return message;
    }
  };
};
