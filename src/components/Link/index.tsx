import React, { FunctionComponent } from "react";
import { Link as ReactLink, LinkProps } from "react-router-dom";

export const Link: FunctionComponent<LinkProps> = (
  {
    onClick = event => event.stopPropagation(),
    ...props
  }
) =>
  <ReactLink onClick={onClick} {...props}/>;
