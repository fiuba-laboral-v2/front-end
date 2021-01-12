import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Title } from "$components/Title";
import { Card } from "$components/Card";
import { Member } from "./Member";
import styles from "./styles.module.scss";

export const Credits: FunctionComponent = () => (
  <Window withoutNavBar alwaysHideNavbar>
    <Title className={styles.title}>Créditos</Title>
    <Card largePadding>
      <div className={styles.description}>
        Este sitio web es un Trabajo Profesional de Ingeniería en Informática.
      </div>
      <div className={styles.innerTitle}>Integrantes del equipo:</div>
      <Member
        name="Dylan Gustavo Alvarez Avalos"
        linkedInLink="https://www.linkedin.com/in/dylan-gustavo-alvarez/"
        gitHubLink="https://github.com/dylanalvarez"
      />
      <Member
        name="Sebastián Ezequiel Blanco"
        linkedInLink="https://www.linkedin.com/in/sebastian-e-blanco/"
        gitHubLink="https://github.com/BlancoSebastianEzequiel"
      />
      <Member
        name="Manuel Luis Llauró"
        linkedInLink="https://www.linkedin.com/in/llauromanuel/"
        gitHubLink="https://github.com/llmanuel"
      />
      <div className={styles.innerTitle}>Tutor:</div>
      <Member name="Dr. Mariano Gastón Beiró" />
    </Card>
  </Window>
);
