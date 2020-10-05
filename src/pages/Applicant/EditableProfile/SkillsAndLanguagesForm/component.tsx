import React, { FunctionComponent } from "react";

import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";
import { CapabilitiesSelector } from "$components/CapabilitiesSelector";

import { IComponent } from "./interfaces";
import styles from "../EditableDetail/styles.module.scss";

export const SkillsAndLanguagesForm: FunctionComponent<IComponent> = ({ translations }) => (
  <Card largePadding>
    <div className={styles.capabilities}>
      <Subtitle>{translations.capabilities}</Subtitle>
      <CapabilitiesSelector label={translations.capability}/>
    </div>
  </Card>
);
