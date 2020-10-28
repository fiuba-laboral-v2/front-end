import React, { FunctionComponent } from "react";
import { LoginWindow } from "$components/LoginWindow";
import { LoadingSpinner } from "$components/LoadingSpinner";

export const LoadingLoginWindow: FunctionComponent = () => (
  <LoginWindow>
    <LoadingSpinner />
  </LoginWindow>
);
