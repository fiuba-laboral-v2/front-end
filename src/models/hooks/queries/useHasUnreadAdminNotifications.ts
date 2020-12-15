import { useAdvancedQuery } from "$hooks";
import { NotificationsConfig } from "$config";
import { HAS_UNREAD_ADMIN_NOTIFICATIONS } from "$queries";

export const useHasUnreadAdminNotifications = () => {
  const response = useAdvancedQuery<{}, IResponse>(HAS_UNREAD_ADMIN_NOTIFICATIONS, {
    fetchPolicy: "no-cache",
    pollInterval: NotificationsConfig.pollInterval
  });
  return response.data && response.data.hasUnreadAdminNotifications;
};

interface IResponse {
  hasUnreadAdminNotifications: boolean;
}
