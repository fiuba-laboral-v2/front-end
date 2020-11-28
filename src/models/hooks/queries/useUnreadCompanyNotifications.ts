import { useQuery } from "$hooks";
import { HAS_UNREAD_COMPANY_NOTIFICATIONS } from "$queries";

export const useUnreadCompanyNotifications = () => {
  const response = useQuery<{}, IResponse>(HAS_UNREAD_COMPANY_NOTIFICATIONS, {
    fetchPolicy: "no-cache"
  });
  return response.data && response.data.hasUnreadCompanyNotifications;
};

interface IResponse {
  hasUnreadCompanyNotifications: boolean;
}
