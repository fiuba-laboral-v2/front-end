import { useAdvancedQuery } from "$hooks";
import { HAS_UNREAD_APPLICANT_NOTIFICATIONS } from "$queries";

export const useHasUnreadApplicantNotifications = () => {
  const response = useAdvancedQuery<{}, IResponse>(HAS_UNREAD_APPLICANT_NOTIFICATIONS, {
    fetchPolicy: "no-cache",
    pollInterval: 30000
  });
  return response.data && response.data.hasUnreadApplicantNotifications;
};

interface IResponse {
  hasUnreadApplicantNotifications: boolean;
}
