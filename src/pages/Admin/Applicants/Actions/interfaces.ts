import { ApplicantsFilter } from "$models/ApplicantsFilter";

interface ICommonProps {
  showFilter: boolean;
  filter: ApplicantsFilter;
}

export interface IContainerProps extends ICommonProps {
  setShowFilter: (showFilter: boolean) => void;
}

export interface IComponentProps extends ICommonProps {
  isExportEmailDialogOpen: boolean;
  setIsExportEmailDialogOpen: (isExportEmailDialogOpen: boolean) => void;
  onClickFilter: () => void;
  onClickExportEmails: () => void;
}
