import React, { FunctionComponent, MouseEvent } from "react";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";
import styles from "./styles.module.scss";
import Tooltip from "@material-ui/core/Tooltip";

export const Link: FunctionComponent<ILinkProps> = (
  {
    onClick = event => event.stopPropagation(),
    disabledErrorMessage,
    ...props
  }
) => {
  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    onClick(event);
  };
  const reactRouterLink = <ReactRouterLink onClick={handleOnClick} {...props}/>;
  if (!disabledErrorMessage) return reactRouterLink;

  return (
    <Tooltip interactive title={disabledErrorMessage}>
      <div className={styles.disabled}>{reactRouterLink}</div>
    </Tooltip>
  );
};

interface ILinkProps extends LinkProps {
  disabledErrorMessage?: string;
}
