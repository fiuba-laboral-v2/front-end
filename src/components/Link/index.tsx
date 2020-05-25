import React, { FunctionComponent, MouseEvent } from "react";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";

export const Link: FunctionComponent<LinkProps> = (
  {
    onClick = event => event.stopPropagation(),
    ...props
  }
) => {
  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    onClick(event);
  };
  return <ReactRouterLink onClick={handleOnClick} {...props}/>;
};
