import { CurrentRole } from "./Repositories";

export class Role {
  public role: CurrentRole;

  constructor(role: CurrentRole) {
    this.role = role;
  }

  public isCompanyRole() {
    return this.role === CurrentRole.company;
  }

  public isApplicantRole() {
    return this.role === CurrentRole.applicant;
  }

  public isAdminRole() {
    return this.role === CurrentRole.admin;
  }
}
