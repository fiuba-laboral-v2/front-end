import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const OpenDetailIcon: FunctionComponent<IListContentItemProps> = ({ detailRoute }) => {
  const history = useHistory();
  return <OpenInNewIcon fontSize="small" onClick={() => history.push(detailRoute)} />;
};

interface IListContentItemProps {
  detailRoute: string;
}
