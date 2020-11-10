import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Notifications } from "$components/Notifications";
import { EmptyList } from "$components/EmptyList";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const NotificationsContainer: FunctionComponent = () => {
  const history = useHistory();

  return (
    <Notifications
      emptyListComponent={
        <EmptyList
          emptyTranslationSource="companyEmptyNotificationList"
          buttonKind="primary"
          onClick={() => history.push(RoutesBuilder.company.jobApplications())}
        />
      }
    />
  );
};
