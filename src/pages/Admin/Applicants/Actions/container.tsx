import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Actions } from "./components";
import { IContainerProps, ITranslations } from "./interfaces";

export const ActionsContainer: FunctionComponent<IContainerProps> = ({
  filter,
  showFilter,
  setShowFilter
}) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("adminApplicantsActions");

  const onClickFilter = () => {
    setShowFilter(!showFilter);
    filter.clear();
    history.push(RoutesBuilder.admin.applicants({ searchParams: filter.toString() }));
  };

  return (
    <Actions
      translations={translations}
      showFilter={showFilter}
      onClickFilter={onClickFilter}
      onClickExportEmails={() => undefined}
    />
  );
};
