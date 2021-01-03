import { TCurrentUser } from "./CurrentUser";
import { CurrentRole, SessionStorageRepository } from "./Repositories";
import { Role } from "./Role";

export const calculateCurrentRole = (currentUser: TCurrentUser) => {
  try {
    SessionStorageRepository.getCurrentRole();
  } catch (error) {
    let currentRole: CurrentRole = CurrentRole.company;
    if (currentUser.company) currentRole = CurrentRole.company;
    if (currentUser.admin) currentRole = CurrentRole.admin;
    if (currentUser.applicant) currentRole = CurrentRole.applicant;
    if (currentUser.admin && currentUser.applicant) currentRole = CurrentRole.admin;
    const role = new Role(currentRole);
    SessionStorageRepository.saveCurrentRole(role);
  }
};
