import React, { FunctionComponent, MouseEvent } from "react";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";
import styles from "./styles.module.scss";
import Tooltip from "@material-ui/core/Tooltip";

export const Link: FunctionComponent<ILinkProps> = ({
  onClick = event => event.stopPropagation(),
  disabledErrorMessage,
  ...props
}) => {
  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    onClick(event);
  };
  const reactRouterLink = ["#", window.location.hash.substring(1)].includes(props.to) ? (
    <a onClick={handleOnClick} {...props} className={props.className}>
      {props.children}
    </a>
  ) : (
    <ReactRouterLink onClick={handleOnClick} {...props} />
  );
  if (!disabledErrorMessage) return reactRouterLink;

  return (
    <Tooltip interactive title={disabledErrorMessage} placement="right-end">
      <div className={styles.disabled}>{reactRouterLink}</div>
    </Tooltip>
  );
};

export interface ILinkProps extends LinkProps {
  disabledErrorMessage?: string;
  to: string;
}
