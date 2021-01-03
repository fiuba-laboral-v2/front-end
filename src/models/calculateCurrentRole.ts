import { TCurrentUser } from "./CurrentUser";
import { RoleName, SessionStorageRepository } from "./Repositories";
import { Role } from "./Role";

export const calculateCurrentRole = (currentUser: TCurrentUser) => {
  try {
    SessionStorageRepository.getCurrentRole();
  } catch (error) {
    let currentRole: RoleName = RoleName.Company;
    if (currentUser.company) currentRole = RoleName.Company;
    if (currentUser.admin) currentRole = RoleName.Admin;
    if (currentUser.applicant) currentRole = RoleName.Applicant;
    if (currentUser.admin && currentUser.applicant) currentRole = RoleName.Admin;
    const role = new Role(currentRole);
    SessionStorageRepository.saveCurrentRole(role);
  }
};
