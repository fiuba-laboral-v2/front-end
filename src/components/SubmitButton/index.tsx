import React from "react";
import { Button, IButtonProps } from "$components/Button";
import { FormikErrors } from "formik";
import { useShowError } from "$hooks/snackbar";
import { handleValidationError } from "$models/errorHandlers/handleValidationError";
import { isEmpty, keys } from "lodash";

export const SubmitButton = <Values,>({ errors, ...props }: ISubmitButtonProps<Values>) => {
  const showError = useShowError();

  return (
    <Button
      onClick={() => {
        if (!isEmpty(keys(errors))) handleValidationError(showError)();
      }}
      {...props}
    />
  );
};

interface ISubmitButtonProps<Values> extends IButtonProps {
  errors: FormikErrors<Values>;
}
