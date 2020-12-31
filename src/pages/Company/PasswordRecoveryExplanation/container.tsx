import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { PasswordRecoveryExplanation } from "./component";

export const PasswordRecoveryExplanationContainer: FunctionComponent = () => {
  const translations = useTranslations("passwordRecovery");

  return (
    <Window alwaysHideNavbar>
      {!translations && <LoadingSpinner />}
      <PasswordRecoveryExplanation />
    </Window>
  );
};
