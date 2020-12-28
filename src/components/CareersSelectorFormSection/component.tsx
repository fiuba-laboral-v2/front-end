import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { ApplicantCareerSelector } from "$components/ApplicantCareerSelector";
import { IComponent } from "./interfaces";

export const CareersSelectorFormSection: FunctionComponent<IComponent> = ({
  className,
  translations,
  careers,
  defaultValue
}) => (
  <Card largePadding className={className}>
    <FormSet
      title={translations?.title}
      name={"careers"}
      values={careers}
      defaultValue={defaultValue}
      fields={(value, index, autofocusInputRef) => (
        <ApplicantCareerSelector
          key={index}
          index={index}
          value={value}
          autofocusInputRef={autofocusInputRef}
        />
      )}
    />
  </Card>
);
