import { TCurrentUser } from "./CurrentUser";
import { CurrentRole, SessionStorageRepository } from "./Repositories";
import { Role } from "./Role";

export const calculateCurrentRole = (currentUser: TCurrentUser) => {
  try {
    SessionStorageRepository.getCurrentRole();
  } catch (error) {
    let currentRole: CurrentRole = CurrentRole.Company;
    if (currentUser.company) currentRole = CurrentRole.Company;
    if (currentUser.admin) currentRole = CurrentRole.Admin;
    if (currentUser.applicant) currentRole = CurrentRole.Applicant;
    if (currentUser.admin && currentUser.applicant) currentRole = CurrentRole.Admin;
    const role = new Role(currentRole);
    SessionStorageRepository.saveCurrentRole(role);
  }
};
