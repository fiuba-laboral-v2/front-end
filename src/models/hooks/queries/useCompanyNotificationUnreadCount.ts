import { useQuery } from "$hooks";
import { GET_COMPANY_NOTIFICATION_UNREAD_COUNT } from "$queries";

export const useCompanyNotificationUnreadCount = () => {
  const response = useQuery<{}, IResponse>(GET_COMPANY_NOTIFICATION_UNREAD_COUNT);
  return response.data && response.data.getCompanyNotificationUnreadCount;
};

interface IResponse {
  getCompanyNotificationUnreadCount: number;
}
