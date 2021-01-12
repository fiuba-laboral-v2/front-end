import React, { FunctionComponent, useState } from "react";
import { useTranslations } from "$hooks";
import { RejectionMessageButton } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const RejectionMessageButtonContainer: FunctionComponent<IContainerProps> = ({
  getRejectionMessage,
  adminTaskUuid
}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const translations = useTranslations<ITranslations>("rejectionMessageButton");

  const onClick = async () => {
    setShowMessage(!showMessage);
    getRejectionMessage(adminTaskUuid).then(m => setMessage(m!));
  };

  return (
    <RejectionMessageButton
      translations={translations}
      onClick={onClick}
      message={message}
      showMessage={showMessage}
      setShowMessage={setShowMessage}
    />
  );
};
