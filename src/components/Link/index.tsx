import React, { FunctionComponent, MouseEvent } from "react";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";
import styles from "./styles.module.scss";
import Tooltip from "@material-ui/core/Tooltip";

export const Link: FunctionComponent<ILinkProps> = (
  {
    onClick = event => event.stopPropagation(),
    disabledTitle,
    ...props
  }
) => {
  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    onClick(event);
  };
  const reactRouterLink = <ReactRouterLink onClick={handleOnClick} {...props}/>;
  if (!disabledTitle) return reactRouterLink;

  return (
    <Tooltip interactive title={disabledTitle}>
      <div className={styles.disabled}>{reactRouterLink}</div>
    </Tooltip>
  );
};

interface ILinkProps extends LinkProps {
  disabledTitle?: string;
}
