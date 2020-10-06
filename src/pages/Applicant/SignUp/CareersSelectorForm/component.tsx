import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { CareerSelector } from "$components/CareerSelector";
import { IComponent } from "./interfaces";

export const CareersSelectorForm: FunctionComponent<IComponent> = (
  {
    className,
    translations,
    careers,
    defaultValue
  }
) => (
  <Card largePadding className={className}>
    <FormSet
      title={translations.title}
      name={"careers"}
      values={careers}
      defaultValue={defaultValue}
      fields={(value, index) => (
        <CareerSelector key={index} index={index} value={value}/>
      )}
    />
  </Card>
);
