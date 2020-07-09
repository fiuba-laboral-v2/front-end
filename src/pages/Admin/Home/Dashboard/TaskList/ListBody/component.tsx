import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/AdminTask";
import { ClickableCard } from "$components/ClickableCard";
import { ApprovableEntity } from "../ApprovableEntity";
import { List } from "$components/List";
import styles from "./styles.module.scss";

export const ListBody: FunctionComponent<IListBodyProps> = (
  {
    approvableEntities,
    onSelectTask,
    selectedTask
  }
) => (
  <List list={approvableEntities}>
    {entity =>
      <ClickableCard
        key={entity.uuid}
        className={styles.card}
        onClick={() => onSelectTask(entity)}
        selected={entity.uuid === selectedTask?.uuid}
      >
        <ApprovableEntity approvableEntity={entity}/>
      </ClickableCard>
    }
  </List>
);

interface IListBodyProps {
  approvableEntities: IApprovable[];
  onSelectTask: (task: IApprovable) => void;
  selectedTask?: IApprovable;
}
