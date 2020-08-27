import React from "react";
import { Button } from "$components/Button";
import { IButtonProps } from "../Button/interface";
import { FormikErrors } from "formik";
import { useSnackbar } from "notistack";
import { handleValidationError } from "$models/errorHandlers/handleValidationError";
import { isEmpty, keys } from "lodash";

export const SubmitButton = <Values, >(
  { errors, ...props }: ISubmitButtonProps<Values>
) => {
  const { enqueueSnackbar } = useSnackbar();

  return <Button
    onClick={() => {
      if (!isEmpty(keys(errors))) handleValidationError({ enqueueSnackbar })();
    }}
    {...props}
  />;
};

interface ISubmitButtonProps<Values> extends IButtonProps {
  errors: FormikErrors<Values>;
}
