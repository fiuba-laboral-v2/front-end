import React, { FunctionComponent } from "react";
import { Redirect as ReactRouterRedirect } from "react-router-dom";
import { RedirectProps } from "react-router";

export const Redirect: FunctionComponent<RedirectProps> = ({ push = true, ...props }) => (
  <ReactRouterRedirect push {...props} />
);
