import React, { FunctionComponent } from "react";

import { Tab } from "../Tab";
import CheckIcon from "@material-ui/icons/Check";
import HistoryIcon from "@material-ui/icons/History";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

import { ITypeFilterProps } from "./interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import styles from "./styles.module.scss";

export const StatusFilter: FunctionComponent<ITypeFilterProps> = (
  {
    statuses,
    toggleStatus,
    translations
  }
) => (
  <section className={styles.typeFilterContainer}>
    <p className={styles.title}>{translations.title}</p>
    <Tab
      color="grey"
      selected={statuses.includes(ApprovalStatus.approved)}
      iconTitle={translations.approved}
      Icon={CheckIcon}
      onClick={
        () => toggleStatus(!statuses.includes(ApprovalStatus.approved), ApprovalStatus.approved)
      }
    />
    <Tab
      color="grey"
      selected={statuses.includes(ApprovalStatus.rejected)}
      iconTitle={translations.rejected}
      Icon={NotInterestedIcon}
      onClick={
        () => toggleStatus(!statuses.includes(ApprovalStatus.rejected), ApprovalStatus.rejected)
      }
    />
    <Tab
      color="grey"
      selected={statuses.includes(ApprovalStatus.pending)}
      iconTitle={translations.pending}
      Icon={HistoryIcon}
      onClick={
        () => toggleStatus(!statuses.includes(ApprovalStatus.pending), ApprovalStatus.pending)
      }
    />
  </section>
);
