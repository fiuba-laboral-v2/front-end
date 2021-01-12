import React, { FunctionComponent } from "react";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";
import { IOffer } from "$interfaces/Offer";
import { IUseRejectionMessage } from "../../../RejectionMessageButton/interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({
  useRejectionMessage,
  currentStatus,
  offer
}) => {
  const translations = useTranslations<IAdminOfferMainTitle>("adminOfferMainTitle");
  const title = translations ? translations.title : "";
  const isRejected = currentStatus === ApprovalStatus.rejected;
  return (
    <MainTitle
      {...(isRejected && { useRejectionMessage })}
      hidden={!offer}
      title={title}
      updatedAt={offer?.updatedAt}
    />
  );
};

interface IAdminOfferMainTitle {
  title: string;
}

interface IMainTitleContainerProps {
  offer?: IOffer;
  useRejectionMessage: IUseRejectionMessage;
  currentStatus?: ApprovalStatus;
}
