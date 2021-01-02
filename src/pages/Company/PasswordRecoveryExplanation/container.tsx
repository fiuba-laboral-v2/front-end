import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { PasswordRecoveryExplanation } from "./component";
import { ITranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const PasswordRecoveryExplanationContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("passwordRecoveryExplanation");

  const onRetry = () => history.push(RoutesBuilder.company.passwordRecovery());

  return (
    <Window alwaysHideNavbar>
      {!translations && <LoadingSpinner />}
      <PasswordRecoveryExplanation translations={translations} onRetry={onRetry} />
    </Window>
  );
};
