import { useQuery } from "$hooks";
import { HAS_UNREAD_COMPANY_NOTIFICATIONS } from "$queries";

export const useUnreadCompanyNotifications = () => {
  const response = useQuery<{}, IResponse>(HAS_UNREAD_COMPANY_NOTIFICATIONS, {
    pollInterval: 5000
  });
  return response.data && response.data.hasUnreadCompanyNotifications;
};

interface IResponse {
  hasUnreadCompanyNotifications: boolean;
}
