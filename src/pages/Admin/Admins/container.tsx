import React, { FunctionComponent, useState } from "react";
import { IAdmin } from "$interfaces/Admin";
import { useAdmins, useTranslations } from "$hooks";

import { ListPageContainer } from "../components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { Button } from "$components/Button";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { SaveAdminForm } from "./SaveAdminForm";

import styles from "./styles.module.scss";

export const Admins: FunctionComponent = () => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const response = useAdmins();
  const translations = useTranslations<ITranslations>("admins");
  const admins = response?.data?.getAdmins.results;
  const formName = "saveAdmin";

  return (
    <ListPageContainer
      titleTranslationPath={"adminAdminListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(admin: IAdmin) => <ListContentItem admin={admin} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={admins}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getAdmins.shouldFetchMore}
      loading={response.loading}
    >
      <Button
        className={styles.addAdmin}
        onClick={() => setConfirmDialogIsOpen(true)}
        kind="primary"
      >
        {translations?.addAdminButtonLabel || ""}
      </Button>
      <FormConfirmDialog
        formName={formName}
        isOpen={confirmDialogIsOpen}
        confirmButtonType="submit"
        onConfirm={() => undefined}
        onClose={() => setConfirmDialogIsOpen(false)}
        translations={{
          confirmDialogTitle: translations?.title || "",
          confirmDialogDescription: "",
          confirmDialogCancel: translations?.cancel || "",
          confirmDialogConfirm: translations?.submit || ""
        }}
      >
        <SaveAdminForm
          refetch={response.refetch}
          onSubmit={() => setConfirmDialogIsOpen(false)}
          formName={formName}
        />
      </FormConfirmDialog>
    </ListPageContainer>
  );
};

interface ITranslations {
  addAdminButtonLabel: string;
  title: string;
  cancel: string;
  submit: string;
}
