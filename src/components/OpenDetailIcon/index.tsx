import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { useHistory } from "react-router-dom";
import { IconButton } from "$components/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const OpenDetailIcon: FunctionComponent<IListContentItemProps> = ({ detailRoute }) => {
  const translations = useTranslations<ITranslations>("openDetailIcon");
  const history = useHistory();
  return (
    <Tooltip title={translations?.seeDetailTooltipMessage || ""}>
      <div>
        <IconButton Icon={OpenInNewIcon} onClick={() => history.push(detailRoute)} />
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
