import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { IconButton } from "$components/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const OpenDetailIcon: FunctionComponent<IListContentItemProps> = ({ detailRoute }) => {
  const translations = useTranslations<ITranslations>("openDetailIcon");
  return (
    <Tooltip title={translations?.seeDetailTooltipMessage || ""}>
      <div>
        <IconButton Icon={OpenInNewIcon} link={detailRoute} />
      </div>
    </Tooltip>
  );
};

interface IListContentItemProps {
  detailRoute: string;
}

interface ITranslations {
  seeDetailTooltipMessage: string;
}
