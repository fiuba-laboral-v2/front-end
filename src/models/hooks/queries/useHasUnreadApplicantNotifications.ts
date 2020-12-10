import { useAdvancedQuery } from "$hooks";
import { NotificationsConfig } from "$config";
import { HAS_UNREAD_APPLICANT_NOTIFICATIONS } from "$queries";

export const useHasUnreadApplicantNotifications = () => {
  const response = useAdvancedQuery<{}, IResponse>(HAS_UNREAD_APPLICANT_NOTIFICATIONS, {
    fetchPolicy: "no-cache",
    pollInterval: NotificationsConfig.pollInterval
  });
  return response.data && response.data.hasUnreadApplicantNotifications;
};

interface IResponse {
  hasUnreadApplicantNotifications: boolean;
}
