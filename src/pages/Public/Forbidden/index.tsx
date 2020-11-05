import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";
import { Window } from "$components/Window";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import styles from "./styles.module.scss";

export const Forbidden: FunctionComponent = () => (
  <Window>
    <ErrorPage
      title="Acceso denegado"
      buttonMessage="Ir a la página principal"
      icon={<RemoveCircleOutlineIcon className={styles.icon} />}
    />
  </Window>
);
