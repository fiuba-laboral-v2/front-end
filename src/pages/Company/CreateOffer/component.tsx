import React, { FunctionComponent } from "react";
import { Formik } from "formik";

export const CreateOffer: FunctionComponent<ICreateOfferProps> = ({ onSubmit }) => {
  return (
    <Formik
      <ICreateOfferValues>
      initialValues={{ title: "" }}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting }) =>
        <></>
      }
    </Formik>
  );
};

interface ICreateOfferValues {
  title: string;
}

interface ICreateOfferProps {
  onSubmit: (values: ICreateOfferValues) => void;
}
