import React, { FunctionComponent } from "react";

import { FormSection } from "$components/FormSection";
import { CapabilitiesSelector } from "$components/CapabilitiesSelector";

import { IComponent } from "./interfaces";

export const SkillsAndLanguagesFormSection: FunctionComponent<IComponent> = (
  {
    translations,
    className
  }
) => (
  <FormSection
    className={className}
    title={translations.capabilities}
  >
    <CapabilitiesSelector label={translations.capability}/>
  </FormSection>
);
