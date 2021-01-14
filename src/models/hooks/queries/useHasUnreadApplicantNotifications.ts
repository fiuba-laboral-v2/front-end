import { useQuery } from "$hooks";
import { NotificationsConfig } from "$config";
import { HAS_UNREAD_APPLICANT_NOTIFICATIONS } from "$queries";

export const useHasUnreadApplicantNotifications = () => {
  const response = useQuery<{}, IResponse>(HAS_UNREAD_APPLICANT_NOTIFICATIONS, {
    pollInterval: NotificationsConfig.pollInterval
  });
  return response.data && response.data.hasUnreadApplicantNotifications.hasUnreadNotifications;
};

interface IResponse {
  hasUnreadApplicantNotifications: { hasUnreadNotifications: boolean };
}
