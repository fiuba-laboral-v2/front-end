import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { ClickableCard } from "$components/ClickableCard";
import { ApprovableEntity } from "../ApprovableEntity";
import { List } from "$components/List";
import styles from "./styles.module.scss";

export const ListBody: FunctionComponent<IListProps> = ({ approvableEntities }) => (
  <List list={approvableEntities}>
    {entity =>
      <ClickableCard key={entity.uuid} className={styles.card}>
        <ApprovableEntity approvableEntity={entity}/>
      </ClickableCard>
    }
  </List>
);

interface IListProps {
  approvableEntities: IApprovable[];
}
