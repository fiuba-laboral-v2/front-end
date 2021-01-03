import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { IComponent } from "./interfaces";
import { LinkFormSection } from "./LinkFormSection";

export const LinksFormSection: FunctionComponent<IComponent> = ({
  className,
  translations,
  links
}) => (
  <Card largePadding className={className}>
    <FormSet
      title={translations.links}
      name="links"
      values={links}
      getValueKey={link => link.uuid}
      defaultValue={{ url: "", name: "" }}
      fields={(_, index, autofocusInputRef) => (
        <LinkFormSection
          index={index}
          translations={translations}
          autofocusInputRef={autofocusInputRef}
        />
      )}
    />
  </Card>
);
