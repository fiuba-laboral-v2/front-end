import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { ClickableCard } from "$components/ClickableCard";
import { ApprovableEntity } from "../ApprovableEntity";
import { List } from "$components/List";
import styles from "./styles.module.scss";

export const ListBody: FunctionComponent<IListBodyProps> = (
  {
    approvableEntities,
    onSelectTask
  }
) => (
  <List list={approvableEntities}>
    {entity =>
      <ClickableCard key={entity.uuid} className={styles.card} onClick={() => onSelectTask(entity)}>
        <ApprovableEntity approvableEntity={entity}/>
      </ClickableCard>
    }
  </List>
);

interface IListBodyProps {
  approvableEntities: IApprovable[];
  onSelectTask: (task: IApprovable) => void;
}