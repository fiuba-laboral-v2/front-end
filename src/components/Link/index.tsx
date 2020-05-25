import React, { FunctionComponent } from "react";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";

export const Link: FunctionComponent<LinkProps> = (
  {
    onClick = event => event.stopPropagation(),
    ...props
  }
) =>
  <ReactRouterLink onClick={onClick} {...props}/>;
