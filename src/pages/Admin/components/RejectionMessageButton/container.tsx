import React, { FunctionComponent, useState } from "react";
import { useTranslations } from "$hooks";
import { RejectionMessageButton } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const RejectionMessageButtonContainer: FunctionComponent<IContainerProps> = ({
  useRejectionMessage,
  adminTaskUuid,
  className
}) => {
  const { getRejectionMessage, data, loading } = useRejectionMessage();
  const [showMessage, setShowMessage] = useState(false);
  const translations = useTranslations<ITranslations>("rejectionMessageButton");

  const onClick = async () => {
    setShowMessage(!showMessage);
    await getRejectionMessage(adminTaskUuid);
  };

  return (
    <RejectionMessageButton
      className={className}
      loading={loading}
      translations={translations}
      onClick={onClick}
      message={data}
      showMessage={showMessage}
      setShowMessage={setShowMessage}
    />
  );
};
