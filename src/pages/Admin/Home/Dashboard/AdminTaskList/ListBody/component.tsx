import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { ClickableCard } from "$components/ClickableCard";
import { ApprovableEntity } from "../ApprovableEntity";
import styles from "./styles.module.scss";

export const ListBody: FunctionComponent<IListProps> = ({ approvableEntities }) => <>
  {approvableEntities.map(entity =>
    <ClickableCard key={entity.uuid} className={styles.card}>
      <ApprovableEntity approvableEntity={entity}/>
    </ClickableCard>
  )}
</>;

interface IListProps {
  approvableEntities: IApprovable[];
}
