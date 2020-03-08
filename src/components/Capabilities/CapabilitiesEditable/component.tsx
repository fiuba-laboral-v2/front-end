import React, { FunctionComponent } from "react";
import { ICapabilitiesEditableProps } from "./interface";
import { ItemsDetailEditable } from "$components/Detail/ItemsDetailEditable";

const CapabilitiesEditable: FunctionComponent<ICapabilitiesEditableProps> = (
  {
    setList,
    capabilities,
    title
  }) => (
    <ItemsDetailEditable
      titleTranslation={title}
      items={capabilities || []}
      setItem={setList}
    />
);

export { CapabilitiesEditable };
