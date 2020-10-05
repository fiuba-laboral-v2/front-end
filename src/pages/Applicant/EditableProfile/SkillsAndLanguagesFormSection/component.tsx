import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";
import { CapabilitiesSelector } from "$components/CapabilitiesSelector";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const SkillsAndLanguagesFormSection: FunctionComponent<IComponent> = (
  {
    translations,
    className
  }
) => (
  <Card largePadding className={classNames(styles.card, className)}>
    <div>
      <Subtitle>{translations.capabilities}</Subtitle>
      <CapabilitiesSelector label={translations.capability}/>
    </div>
  </Card>
);
