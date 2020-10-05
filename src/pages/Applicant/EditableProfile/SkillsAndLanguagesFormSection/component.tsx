import React, { FunctionComponent } from "react";

import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";
import { CapabilitiesSelector } from "$components/CapabilitiesSelector";

import { IComponent } from "./interfaces";

export const SkillsAndLanguagesFormSection: FunctionComponent<IComponent> = (
  {
    translations,
    className
  }
) => (
  <Card largePadding className={className}>
    <div>
      <Subtitle>{translations.capabilities}</Subtitle>
      <CapabilitiesSelector label={translations.capability}/>
    </div>
  </Card>
);
