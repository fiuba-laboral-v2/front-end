import { useQuery } from "../useQuery";
import { IUser } from "../../../interfaces/User";
import { GET_CURRENT_USER } from "$queries";

export const useCurrentUser = () => useQuery<{}, IUseCurrentUser>(GET_CURRENT_USER);

interface IUseCurrentUser {
  getCurrentUser: IUser | undefined;
}
