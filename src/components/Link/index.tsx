import React, { FunctionComponent, MouseEvent } from "react";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";
import styles from "./styles.module.scss";
import Tooltip from "@material-ui/core/Tooltip";

export const Link: FunctionComponent<LinkProps & ILink> = (
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

  if (disabledTitle) {
    return (
      <Tooltip interactive title={disabledTitle}>
        <span className={styles.disabled}>
          <a href={props.to.toString()}>{props.children}</a>
        </span>
      </Tooltip>
    );
  }

  return <ReactRouterLink onClick={handleOnClick} {...props}/>;
};

interface ILink {
  disabledTitle?: string;
}
