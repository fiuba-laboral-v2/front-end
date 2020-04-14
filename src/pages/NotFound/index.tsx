import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { Title } from "$components/Title";
import { Window } from "$components/Window";
import Button from "$components/Button";
import { Link } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";

const NotFoundPage: FunctionComponent = () => (
  <Window>
    <div className={styles.container}>
      <Title title={"Parece que esta página no existe"}/>
      <img src={"images/brokenLink.svg"} alt="Not found" className={styles.image}/>
      <Link to={RoutesBuilder.applicant.home()} className={styles.link}>
        <Button className={"primary"}>{"Ir a la página principal"}</Button>
      </Link>
    </div>
  </Window>
);

export default NotFoundPage;
