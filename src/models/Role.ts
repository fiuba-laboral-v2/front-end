import { CurrentRole } from "./Repositories";

export class Role {
  public role: CurrentRole;

  constructor(role: CurrentRole) {
    this.role = role;
  }

  public isCompanyRole() {
    return this.role === CurrentRole.Company;
  }

  public isApplicantRole() {
    return this.role === CurrentRole.Applicant;
  }

  public isAdminRole() {
    return this.role === CurrentRole.Admin;
  }
}
