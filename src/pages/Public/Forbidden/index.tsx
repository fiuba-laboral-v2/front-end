import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ErrorPage } from "$components/ErrorPage";
import { Window } from "$components/Window";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import styles from "./styles.module.scss";

export const Forbidden: FunctionComponent = () => {
  const history = useHistory();
  return (
    <Window>
      <ErrorPage
        title="Acceso denegado"
        buttonMessage="Ir a la página principal"
        onClickButton={() => history.push(RoutesBuilder.public.home())}
        icon={<RemoveCircleOutlineIcon className={styles.icon}/>}
      />
    </Window>
  );
};
