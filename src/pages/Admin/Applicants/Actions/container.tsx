import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Actions } from "./components";
import { IContainerProps } from "./interfaces";

export const ActionsContainer: FunctionComponent<IContainerProps> = ({
  filter,
  showFilter,
  setShowFilter
}) => {
  const [isExportEmailDialogOpen, setIsExportEmailDialogOpen] = useState(false);
  const history = useHistory();

  const onClickFilter = () => {
    setShowFilter(!showFilter);
    filter.clear();
    history.push(RoutesBuilder.admin.applicants({ searchParams: filter.toString() }));
  };

  return (
    <Actions
      filter={filter}
      isExportEmailDialogOpen={isExportEmailDialogOpen}
      setIsExportEmailDialogOpen={setIsExportEmailDialogOpen}
      showFilter={showFilter}
      onClickFilter={onClickFilter}
      onClickExportEmails={() => setIsExportEmailDialogOpen(true)}
    />
  );
};
