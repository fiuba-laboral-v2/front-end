import { useAdvancedQuery } from "$hooks";
import { NotificationsConfig } from "$config";
import { HAS_UNREAD_COMPANY_NOTIFICATIONS } from "$queries";

export const useHasUnreadCompanyNotifications = () => {
  const response = useAdvancedQuery<{}, IResponse>(HAS_UNREAD_COMPANY_NOTIFICATIONS, {
    fetchPolicy: "no-cache",
    pollInterval: NotificationsConfig.pollInterval
  });
  return response.data && response.data.hasUnreadCompanyNotifications;
};

interface IResponse {
  hasUnreadCompanyNotifications: boolean;
}
