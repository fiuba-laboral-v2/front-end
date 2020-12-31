import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { PasswordRecoveryExplanation } from "./component";
import { ITranslations } from "./interfaces";

export const PasswordRecoveryExplanationContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("passwordRecoveryExplanation");

  return (
    <Window alwaysHideNavbar>
      {!translations && <LoadingSpinner />}
      <PasswordRecoveryExplanation translations={translations} />
    </Window>
  );
};
