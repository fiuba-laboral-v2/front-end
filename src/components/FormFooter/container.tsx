import React, { FunctionComponent } from "react";
import { FormFooter } from "./component";
import { IFormFooterContainerProps } from "./interface";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "../../graphql/queries";

const FormFooterContainer: FunctionComponent<IFormFooterContainerProps> = (
  {
    onSubmit,
    onCancel
  }) => {
  const { data } = useQuery(getTranslations, {
      variables: { paths: ["save", "cancel"] }
    }
  );

  const [save, cancel] = data ? data.getTranslations : ["", ""];

  return (
    <FormFooter
      onCancel={onCancel}
      onSubmit={onSubmit}
      saveText={save}
      cancelText={cancel}
    />
  );
};

export { FormFooterContainer };
