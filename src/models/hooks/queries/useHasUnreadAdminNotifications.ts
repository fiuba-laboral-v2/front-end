import { useQuery } from "$hooks";
import { NotificationsConfig } from "$config";
import { HAS_UNREAD_ADMIN_NOTIFICATIONS } from "$queries";

export const useHasUnreadAdminNotifications = () => {
  const response = useQuery<{}, IResponse>(HAS_UNREAD_ADMIN_NOTIFICATIONS, {
    pollInterval: NotificationsConfig.pollInterval
  });
  return response.data && response.data.hasUnreadAdminNotifications.hasUnreadNotifications;
};

interface IResponse {
  hasUnreadAdminNotifications: { hasUnreadNotifications: boolean };
}
